async function getFolderPath() {
  try {
    const directoryHandle = await window.showDirectoryPicker();
    let fullPath = directoryHandle.name; // Initialize fullPath with the root directory name

    // Recursively traverse the directory structure to construct the full path
    async function traverseDirectory(directoryHandle) {
      for await (const entry of directoryHandle.values()) {
        if (entry.kind === "directory") {
          // If it's a directory, traverse it recursively
          fullPath += `/${entry.name}`;
          await traverseDirectory(entry);
        }
      }
    }

    await traverseDirectory(directoryHandle);
    console.log("Full path:", fullPath);
    return fullPath;
  } catch (error) {
    console.error("Error accessing directory:", error);
  }
}

// Call the function to get the full path
getFolderPath();
