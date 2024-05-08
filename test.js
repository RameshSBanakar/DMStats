
{
    "parts": {
        "Properties": {
            "Property": [
                {
                    "_attributes": {
                        "name": "Module Id",
                        "type": "TEXT",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Version",
                        "type": "TEXT",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Study Version",
                        "type": "STUDY VERSION",
                        "default_value": "0",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "File Type",
                        "type": "TEXT",
                        "default_value": "ANSA",
                        "accepted_values": "'',ANSA,Nastran,LsDyna,PamCrash,Abaqus,Radioss,Ansys,Fluent,Fluent2D,StarCD,Uh3D,Cfd++,OpenFoam,Permas,Moldex3D,TAITHERM,Sestra,Theseus,ScTetra,TAU,CGNS,CGNS2D,Optistruct,Marc,Actran,Impetus",
                        "allow_null": "YES",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Representation",
                        "type": "TEXT",
                        "allow_null": "YES",
                        "read_only": "NO"
                    }
                }
            ]
        },
        "Attributes": {
            "Attribute": [
                {
                    "_attributes": {
                        "name": "Name",
                        "type": "TEXT"
                    }
                },
                {
                    "_attributes": {
                        "name": "Status",
                        "type": "TEXT",
                        "default_value": "WIP",
                        "accepted_values": "WIP,OK,Warning,Error"
                    }
                }
            ]
        }
    },
    "Subsystems": {
        "Properties": {
            "Property": [
                {
                    "_attributes": {
                        "name": "Module Id",
                        "type": "TEXT",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Variant",
                        "type": "TEXT",
                        "default_value": "-",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Project",
                        "type": "TEXT",
                        "default_value": "-",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Release",
                        "type": "TEXT",
                        "default_value": "-",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Iteration",
                        "type": "VERSIONING SCHEME COUNTER",
                        "default_value": "001",
                        "allow_null": "NO",
                        "read_only": "NO",
                        "format": "%03d"
                    }
                },
                {
                    "_attributes": {
                        "name": "Loadcase Variant",
                        "type": "TEXT",
                        "default_value": "-",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "File Type",
                        "type": "TEXT",
                        "default_value": "ANSA",
                        "accepted_values": "ANSA,Nastran,LsDyna,PamCrash,Abaqus,Radioss,Ansys,Fluent,Fluent2D,StarCD,Uh3D,Cfd++,OpenFoam,Permas,Moldex3D,TAITHERM,Sestra,Theseus,ScTetra,TAU,CGNS,CGNS2D,Optistruct,Marc,Actran,Impetus",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Representation",
                        "type": "TEXT",
                        "accepted_values": "crash_fe,nvh_fe,dura_fe,lumped_mass,'',Regular,Connecting,Display Model,Reduced Model,SuperElement OP2,SuperElement PCH,SuperElement,FRF Model,Modal Model,RigidBody",
                        "allow_null": "YES",
                        "read_only": "NO"
                    }
                }
            ]
        },
        "Attributes": {
            "Attribute": [
                {
                    "_attributes": {
                        "name": "Name",
                        "type": "TEXT"
                    }
                },
                {
                    "_attributes": {
                        "name": "Status",
                        "type": "TEXT",
                        "default_value": "WIP",
                        "accepted_values": "WIP,OK,Warning,Error"
                    }
                }
            ]
        }
    },
    "Simulation_Model": {
        "Properties": {
            "Property": [
                {
                    "_attributes": {
                        "name": "Discipline",
                        "type": "TEXT",
                        "default_value": "durability",
                        "accepted_values": "crash,nvh,durability,cfd",
                        "allow_null": "YES",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Model Id",
                        "type": "TEXT",
                        "default_value": "crash_assembly",
                        "accepted_values": "crash_assembly,pedestrian_assembly,body,seat_dummy",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Model Variant",
                        "type": "TEXT",
                        "default_value": "-",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Project",
                        "type": "TEXT",
                        "default_value": "-",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Release",
                        "type": "TEXT",
                        "default_value": "-",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Iteration",
                        "type": "VERSIONING SCHEME COUNTER",
                        "default_value": "001",
                        "allow_null": "NO",
                        "read_only": "NO",
                        "format": "%03d"
                    }
                },
                {
                    "_attributes": {
                        "name": "File Type",
                        "type": "TEXT",
                        "default_value": "ANSA",
                        "accepted_values": "ANSA,Nastran,LsDyna,PamCrash,Abaqus,Radioss,Ansys,Fluent,Fluent2D,StarCD,Uh3D,Cfd++,OpenFoam,Permas,Moldex3D,TAITHERM,Sestra,Theseus,ScTetra,TAU,CGNS,CGNS2D,Optistruct,Marc,Actran,Impetus",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "File",
                        "type": "FILE",
                        "allow_null": "YES",
                        "read_only": "NO"
                    }
                }
            ]
        },
        "Attributes": {
            "Attribute": [
                {
                    "_attributes": {
                        "name": "Name",
                        "type": "TEXT"
                    }
                },
                {
                    "_attributes": {
                        "name": "Status",
                        "type": "TEXT",
                        "default_value": "WIP",
                        "accepted_values": "WIP,OK,Warning,Error"
                    }
                }
            ]
        },
        "Containing_Items": {
            "Containing_Item": [
                {
                    "_attributes": {
                        "type": "LoadCase"
                    }
                },
                {
                    "_attributes": {
                        "type": "Report"
                    }
                },
                {
                    "_attributes": {
                        "type": "Session"
                    }
                }
            ]
        },
        "Rules": {
            "Rule": [
                {
                    "_attributes": {
                        "name": "Name",
                        "discarded_chars": "-",
                        "generated_value": "[Model Id]_[Project]_[Release]_[Model Variant]_[Discipline]_[Iteration]"
                    }
                },
                {
                    "_attributes": {
                        "name": "Model Id",
                        "accepted_values": "crash_assembly,pedestrian_assembly,body,seat_dummy",
                        "condition_name": "Discipline",
                        "condition_value": "crash"
                    }
                },
                {
                    "_attributes": {
                        "name": "Model Id",
                        "accepted_values": "trim_body,cavity,nvh_assembly,body",
                        "condition_name": "Discipline",
                        "condition_value": "nvh"
                    }
                },
                {
                    "_attributes": {
                        "name": "Model Id",
                        "accepted_values": "body,door,hood,liftgate",
                        "condition_name": "Discipline",
                        "condition_value": "durability"
                    }
                },
                {
                    "_attributes": {
                        "name": "Model Id",
                        "accepted_values": "external_aero,underhood,cabin",
                        "condition_name": "Discipline",
                        "condition_value": "cfd"
                    }
                }
            ]
        }
    },
    "LoadCase": {
        "Properties": {
            "Property": [
                {
                    "_attributes": {
                        "name": "Loadcase Id",
                        "type": "TEXT",
                        "default_value": "-",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Iteration",
                        "type": "VERSIONING SCHEME COUNTER",
                        "default_value": "01",
                        "allow_null": "NO",
                        "read_only": "NO",
                        "format": "%02d"
                    }
                },
                {
                    "_attributes": {
                        "name": "Simulation_Model",
                        "type": "OBJECT ID",
                        "allow_null": "YES",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "File Type",
                        "type": "TEXT",
                        "default_value": "ANSA",
                        "accepted_values": "ANSA,Nastran,LsDyna,PamCrash,Abaqus,Radioss,Ansys,Fluent,Fluent2D,StarCD,Uh3D,Cfd++,OpenFoam,Permas,Moldex3D,TAITHERM,Sestra,Theseus,ScTetra,TAU,CGNS,CGNS2D,Optistruct,Marc,Actran,Impetus",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "File",
                        "type": "FILE",
                        "allow_null": "YES",
                        "read_only": "NO"
                    }
                }
            ]
        },
        "Attributes": {
            "Attribute": [
                {
                    "_attributes": {
                        "name": "Name",
                        "type": "TEXT"
                    }
                },
                {
                    "_attributes": {
                        "name": "Status",
                        "type": "TEXT",
                        "default_value": "WIP",
                        "accepted_values": "WIP,OK,Warning,Error"
                    }
                }
            ]
        },
        "Containing_Items": {
            "Containing_Item": [
                {
                    "_attributes": {
                        "type": "Simulation_Run"
                    }
                },
                {
                    "_attributes": {
                        "type": "Session"
                    }
                },
                {
                    "_attributes": {
                        "type": "Report"
                    }
                }
            ]
        },
        "Rules": {
            "Rule": {
                "_attributes": {
                    "name": "Name",
                    "discarded_chars": "-",
                    "generated_value": "[Loadcase Id]_[Iteration]"
                }
            }
        }
    },
    "Simulation_Run": {
        "Properties": {
            "Property": [
                {
                    "_attributes": {
                        "name": "Iteration",
                        "type": "VERSIONING SCHEME COUNTER",
                        "default_value": "01",
                        "allow_null": "NO",
                        "read_only": "NO",
                        "format": "%02d"
                    }
                },
                {
                    "_attributes": {
                        "name": "Simulation_Model",
                        "type": "OBJECT ID",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "LoadCase",
                        "type": "OBJECT ID",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "File Type",
                        "type": "TEXT",
                        "default_value": "ANSA",
                        "accepted_values": "ANSA,Nastran,LsDyna,PamCrash,Abaqus,Radioss,Ansys,Fluent,Fluent2D,StarCD,Uh3D,Cfd++,OpenFoam,Permas,Moldex3D,TAITHERM,Sestra,Theseus,ScTetra,TAU,CGNS,CGNS2D,Optistruct,Marc,Actran,Impetus",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "File",
                        "type": "FILE",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                }
            ]
        },
        "Attributes": {
            "Attribute": [
                {
                    "_attributes": {
                        "name": "Name",
                        "type": "TEXT"
                    }
                },
                {
                    "_attributes": {
                        "name": "Target Point",
                        "type": "TEXT"
                    }
                },
                {
                    "_attributes": {
                        "name": "Status",
                        "type": "TEXT",
                        "default_value": "WIP",
                        "accepted_values": "WIP,OK,Warning,Error"
                    }
                }
            ]
        },
        "Containing_Items": {
            "Containing_Item": [
                {
                    "_attributes": {
                        "type": "Session"
                    }
                },
                {
                    "_attributes": {
                        "type": "Report"
                    }
                }
            ]
        },
        "Rules": {
            "Rule": {
                "_attributes": {
                    "name": "Name",
                    "discarded_chars": "-",
                    "generated_value": "[LoadCase.Loadcase Id]_[Simulation_Model.Project]_[Simulation_Model.Release]_[Simulation_Model.Model Variant]_[Simulation_Model.Iteration]_[LoadCase.Iteration]_[Iteration]"
                }
            }
        }
    },
    "Report": {
        "Properties": {
            "Property": [
                {
                    "_attributes": {
                        "name": "Type",
                        "type": "TEXT",
                        "default_value": "Image",
                        "accepted_values": "Image,Video,Curve,MetaProject,Presentation,Table,Spreadsheet,KeyValue,Annotation,PDF,HTML,3dModel,Plot",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Report_Parameters",
                        "type": "TEXT",
                        "default_value": "-",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Name",
                        "type": "TEXT",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "LoadCase",
                        "type": "OBJECT ID",
                        "allow_null": "YES",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Simulation_Run",
                        "type": "OBJECT ID",
                        "allow_null": "YES",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Simulation_Model",
                        "type": "OBJECT ID",
                        "allow_null": "YES",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Predictor",
                        "type": "OBJECT ID",
                        "allow_null": "YES",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "File",
                        "type": "FILE",
                        "allow_null": "YES",
                        "read_only": "NO"
                    }
                }
            ]
        },
        "Attributes": {
            "Attribute": {
                "_attributes": {
                    "name": "Value",
                    "type": "TEXT"
                }
            }
        }
    },
    "Session": {
        "Properties": {
            "Property": [
                {
                    "_attributes": {
                        "name": "Name",
                        "type": "TEXT",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "LoadCase",
                        "type": "OBJECT ID",
                        "allow_null": "YES",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Simulation_Run",
                        "type": "OBJECT ID",
                        "allow_null": "YES",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Simulation_Model",
                        "type": "OBJECT ID",
                        "allow_null": "YES",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "File",
                        "type": "FILE",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                }
            ]
        }
    },
    "Changeset": {
        "Properties": {
            "Property": [
                {
                    "_attributes": {
                        "name": "Revision",
                        "type": "TEXT",
                        "default_value": "-",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "File",
                        "type": "FILE",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                }
            ]
        }
    },
    "Predictor": {
        "Properties": {
            "Property": [
                {
                    "_attributes": {
                        "name": "Output Measure",
                        "type": "TEXT",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Group Name",
                        "type": "TEXT",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Iteration",
                        "type": "VERSIONING SCHEME COUNTER",
                        "default_value": "001",
                        "allow_null": "NO",
                        "read_only": "NO",
                        "format": "%03d"
                    }
                },
                {
                    "_attributes": {
                        "name": "Sub-Type",
                        "type": "TEXT",
                        "default_value": "DV based predictor",
                        "accepted_values": "Feature based predictor,DV based predictor,DV based predictor Kriging",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "File",
                        "type": "FILE",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                }
            ]
        },
        "Attributes": {
            "Attribute": [
                {
                    "_attributes": {
                        "name": "Name",
                        "type": "TEXT"
                    }
                },
                {
                    "_attributes": {
                        "name": "Status",
                        "type": "TEXT",
                        "accepted_values": "Training,OK,Pending Verification,Failed Verification,Error in Training,''",
                        "colors_for_accepted_values": "gray,green,orange,red,magenta,white"
                    }
                }
            ]
        },
        "Containing_Items": {
            "Containing_Item": {
                "_attributes": {
                    "type": "Report"
                }
            }
        },
        "Rules": {
            "Rule": {
                "_attributes": {
                    "name": "Name",
                    "discarded_chars": "-",
                    "generated_value": "[Sub-Type]_[Group Name]_[Iteration]_[Output Measure]"
                }
            }
        }
    },
    "Optimization_Study": {
        "Properties": {
            "Property": [
                {
                    "_attributes": {
                        "name": "Name",
                        "type": "TEXT",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Iteration",
                        "type": "VERSIONING SCHEME COUNTER",
                        "default_value": "001",
                        "allow_null": "NO",
                        "read_only": "NO",
                        "format": "%03d"
                    }
                },
                {
                    "_attributes": {
                        "name": "Algorithm",
                        "type": "TEXT",
                        "default_value": "IPOPT",
                        "accepted_values": "IPOPT,Simulated Annealing",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Method",
                        "type": "TEXT",
                        "default_value": "RSM",
                        "accepted_values": "RSM,DIRECT",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "File",
                        "type": "FILE",
                        "allow_null": "YES",
                        "read_only": "NO"
                    }
                }
            ]
        },
        "Rules": {
            "Rule": [
                {
                    "_attributes": {
                        "name": "Method",
                        "accepted_values": "RSM",
                        "condition_name": "Algorithm",
                        "condition_value": "IPOPT"
                    }
                },
                {
                    "_attributes": {
                        "name": "Method",
                        "accepted_values": "RSM,DIRECT",
                        "condition_name": "Algorithm",
                        "condition_value": "Simulated Annealing"
                    }
                }
            ]
        }
    },
    "Modular_Environment_Profile": {
        "Properties": {
            "Property": [
                {
                    "_attributes": {
                        "name": "Discipline",
                        "type": "TEXT",
                        "accepted_values": "crash,nvh,durability,cfd",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Target Solver",
                        "type": "TEXT",
                        "accepted_values": "Nastran,LsDyna,PamCrash,Abaqus,Radioss,Ansys,Fluent,Fluent2D,StarCD,Uh3D,Cfd++,OpenFoam,Permas,Moldex3D,TAITHERM,Sestra,Theseus,ScTetra,TAU,CGNS,CGNS2D,Optistruct,Marc,Actran,Impetus",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Version",
                        "type": "VERSIONING SCHEME COUNTER",
                        "default_value": "001",
                        "allow_null": "NO",
                        "read_only": "NO",
                        "format": "%03d"
                    }
                },
                {
                    "_attributes": {
                        "name": "File",
                        "type": "FILE",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                }
            ]
        },
        "Rules": {
            "Rule": [
                {
                    "_attributes": {
                        "name": "Name",
                        "discarded_chars": "-",
                        "generated_value": "[Discipline]_[Target Solver]_[Version]"
                    }
                },
                {
                    "_attributes": {
                        "name": "Target Solver",
                        "accepted_values": "LsDyna,PamCrash,Abaqus,Radioss,Impetus",
                        "condition_name": "Discipline",
                        "condition_value": "crash"
                    }
                },
                {
                    "_attributes": {
                        "name": "Target Solver",
                        "accepted_values": "Nastran,Ansys,Optistruct,Actran",
                        "condition_name": "Discipline",
                        "condition_value": "nvh"
                    }
                },
                {
                    "_attributes": {
                        "name": "Target Solver",
                        "accepted_values": "Abaqus,Nastran,Radioss,Ansys,Permas,Marc,Moldex3D,Sestra",
                        "condition_name": "Discipline",
                        "condition_value": "durability"
                    }
                },
                {
                    "_attributes": {
                        "name": "Target Solver",
                        "accepted_values": "Cfd++,Fluent,Fluent2D,StarCD,Uh3D,OpenFoam,ScTetra,TAU,CGNS,CGNS2D,Theseus,TAITHERM",
                        "condition_name": "Discipline",
                        "condition_value": "cfd"
                    }
                }
            ]
        }
    },
    "Build_Action": {
        "Properties": {
            "Property": [
                {
                    "_attributes": {
                        "name": "Entity Type",
                        "type": "TEXT",
                        "default_value": "-",
                        "accepted_values": "Parts,Subsystems,Library_Items,Simulation_Models,Loadcases,Simulation_Runs,Subsystem_Adapters,Simulation_Model_Adapters,Loadcase_Adapters,Simulation_Run_Adapters,-",
                        "allow_null": "YES",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Type",
                        "type": "TEXT",
                        "accepted_values": "Built_In,Script,Check_Template",
                        "allow_null": "NO",
                        "read_only": "YES"
                    }
                },
                {
                    "_attributes": {
                        "name": "Name",
                        "type": "TEXT",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Iteration",
                        "type": "VERSIONING SCHEME COUNTER",
                        "default_value": "001",
                        "allow_null": "NO",
                        "read_only": "NO",
                        "format": "%03d"
                    }
                },
                {
                    "_attributes": {
                        "name": "File",
                        "type": "FILE",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                }
            ]
        }
    },
    "Build_Process": {
        "Properties": {
            "Property": [
                {
                    "_attributes": {
                        "name": "Entity Type",
                        "type": "TEXT",
                        "accepted_values": "Parts,Subsystems,Library_Items,Simulation_Models,Loadcases,Simulation_Runs,Subsystem_Adapters,Simulation_Model_Adapters,Loadcase_Adapters,Simulation_Run_Adapters",
                        "allow_null": "NO",
                        "read_only": "YES"
                    }
                },
                {
                    "_attributes": {
                        "name": "Name",
                        "type": "TEXT",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Iteration",
                        "type": "VERSIONING SCHEME COUNTER",
                        "default_value": "001",
                        "allow_null": "NO",
                        "read_only": "NO",
                        "format": "%03d"
                    }
                },
                {
                    "_attributes": {
                        "name": "File",
                        "type": "FILE",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                }
            ]
        }
    },
    "Build_Setup": {
        "Properties": {
            "Property": [
                {
                    "_attributes": {
                        "name": "Entity Type",
                        "type": "TEXT",
                        "accepted_values": "Parts,Subsystems,Library_Items,Simulation_Models,Loadcases,Simulation_Runs,Subsystem_Adapters,Simulation_Model_Adapters,Loadcase_Adapters,Simulation_Run_Adapters",
                        "allow_null": "NO",
                        "read_only": "YES"
                    }
                },
                {
                    "_attributes": {
                        "name": "Discipline",
                        "type": "TEXT",
                        "accepted_values": "crash,nvh,durability,cfd,cross_discipline",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Target Solver",
                        "type": "TEXT",
                        "accepted_values": "Nastran,LsDyna,PamCrash,Abaqus,Radioss,Ansys,Fluent,Fluent2D,StarCD,Uh3D,Cfd++,OpenFoam,Permas,Moldex3D,TAITHERM,Sestra,Theseus,ScTetra,TAU,CGNS,CGNS2D,Optistruct,Marc,Actran,Impetus,cross_target_solver",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Iteration",
                        "type": "VERSIONING SCHEME COUNTER",
                        "default_value": "001",
                        "allow_null": "NO",
                        "read_only": "NO",
                        "format": "%03d"
                    }
                },
                {
                    "_attributes": {
                        "name": "File",
                        "type": "FILE",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                }
            ]
        },
        "Attributes": {
            "Attribute": {
                "_attributes": {
                    "name": "Name",
                    "type": "TEXT"
                }
            }
        }
    },
    "DOE_Study": {
        "Properties": {
            "Property": [
                {
                    "_attributes": {
                        "name": "Optimization Task Name",
                        "type": "TEXT",
                        "default_value": "-",
                        "allow_null": "NO",
                        "read_only": "NO"
                    }
                },
                {
                    "_attributes": {
                        "name": "Iteration",
                        "type": "VERSIONING SCHEME COUNTER",
                        "default_value": "0001",
                        "allow_null": "NO",
                        "read_only": "NO",
                        "format": "%04d"
                    }
                },
                {
                    "_attributes": {
                        "name": "File",
                        "type": "FILE",
                        "allow_null": "YES",
                        "read_only": "NO"
                    }
                }
            ]
        },
        "Attributes": {
            "Attribute": {
                "_attributes": {
                    "name": "Name",
                    "type": "TEXT",
                    "default_value": "-"
                }
            }
        },
        "Rules": {
            "Rule": {
                "_attributes": {
                    "name": "Name",
                    "discarded_chars": "-",
                    "generated_value": "[Optimization Task Name]_[Iteration]"
                }
            }
        }
    },
    "LIBRARY_ITEMS": {
        "LIBRARYITEM": [
            {
                "_attributes": {
                    "type": "Simulation_Configuration_Table"
                },
                "Properties": {
                    "Property": [
                        {
                            "_attributes": {
                                "name": "Project",
                                "type": "TEXT",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Release",
                                "type": "TEXT",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Version",
                                "type": "VERSIONING SCHEME COUNTER",
                                "default_value": "01",
                                "allow_null": "NO",
                                "read_only": "NO",
                                "format": "%02d"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Name",
                                "type": "TEXT",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "File",
                                "type": "FILE",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        }
                    ]
                },
                "Attributes": {
                    "Attribute": {
                        "_attributes": {
                            "name": "Status",
                            "type": "TEXT",
                            "default_value": "WIP",
                            "accepted_values": "WIP,OK,Warning,Error"
                        }
                    }
                }
            },
            {
                "_attributes": {
                    "type": "Loadcase_Header"
                },
                "Properties": {
                    "Property": [
                        {
                            "_attributes": {
                                "name": "Project",
                                "type": "TEXT",
                                "default_value": "-",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Release",
                                "type": "TEXT",
                                "default_value": "-",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Model Variant",
                                "type": "TEXT",
                                "default_value": "-",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Loadcase Variant",
                                "type": "TEXT",
                                "default_value": "-",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Iteration",
                                "type": "VERSIONING SCHEME COUNTER",
                                "default_value": "01",
                                "allow_null": "NO",
                                "read_only": "NO",
                                "format": "%02d"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Name",
                                "type": "TEXT",
                                "default_value": "Loadcase_Header",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "File",
                                "type": "FILE",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        }
                    ]
                },
                "Attributes": {
                    "Attribute": {
                        "_attributes": {
                            "name": "Status",
                            "type": "TEXT",
                            "default_value": "WIP",
                            "accepted_values": "WIP,OK,Warning,Error"
                        }
                    }
                }
            },
            {
                "_attributes": {
                    "type": "Target_Points"
                },
                "Properties": {
                    "Property": [
                        {
                            "_attributes": {
                                "name": "Loadcase Id",
                                "type": "TEXT",
                                "default_value": "-",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Project",
                                "type": "TEXT",
                                "default_value": "-",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Release",
                                "type": "TEXT",
                                "default_value": "-",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Model Variant",
                                "type": "TEXT",
                                "default_value": "-",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Iteration",
                                "type": "VERSIONING SCHEME COUNTER",
                                "default_value": "01",
                                "allow_null": "NO",
                                "read_only": "NO",
                                "format": "%02d"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "File",
                                "type": "FILE",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        }
                    ]
                },
                "Attributes": {
                    "Attribute": {
                        "_attributes": {
                            "name": "Status",
                            "type": "TEXT",
                            "default_value": "WIP",
                            "accepted_values": "WIP,OK,Warning,Error"
                        }
                    }
                },
                "Rules": {
                    "Rule": {
                        "_attributes": {
                            "name": "Name",
                            "discarded_chars": "-",
                            "generated_value": "[Loadcase Id]_[Project]_[Release]_[Model Variant]_[Iteration]"
                        }
                    }
                }
            },
            {
                "_attributes": {
                    "type": "Loadcase_Template"
                },
                "Properties": {
                    "Property": [
                        {
                            "_attributes": {
                                "name": "Loadcase Id",
                                "type": "TEXT",
                                "default_value": "-",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Iteration",
                                "type": "VERSIONING SCHEME COUNTER",
                                "default_value": "01",
                                "allow_null": "NO",
                                "read_only": "NO",
                                "format": "%02d"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "File Type",
                                "type": "TEXT",
                                "default_value": "ANSA",
                                "accepted_values": "ANSA,Nastran,LsDyna,PamCrash,Abaqus,Radioss,Ansys,Fluent,Fluent2D,StarCD,Uh3D,Cfd++,OpenFoam,Permas,Moldex3D,TAITHERM,Sestra,Theseus,ScTetra,TAU,CGNS,CGNS2D,Optistruct,Marc,Actran,Impetus",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "File",
                                "type": "FILE",
                                "allow_null": "YES",
                                "read_only": "NO"
                            }
                        }
                    ]
                },
                "Attributes": {
                    "Attribute": [
                        {
                            "_attributes": {
                                "name": "Name",
                                "type": "TEXT"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Status",
                                "type": "TEXT",
                                "default_value": "WIP",
                                "accepted_values": "WIP,OK,Warning,Error"
                            }
                        }
                    ]
                },
                "Rules": {
                    "Rule": {
                        "_attributes": {
                            "name": "Name",
                            "discarded_chars": "-",
                            "generated_value": "[Loadcase Id]_[Iteration]"
                        }
                    }
                }
            },
            {
                "_attributes": {
                    "type": "Library_File"
                },
                "Properties": {
                    "Property": [
                        {
                            "_attributes": {
                                "name": "Type",
                                "type": "TEXT",
                                "accepted_values": "BARRIER,CONTROL_CARDS,DUMMY,FRICTION,GRAVITY,GROUND,HEADER,IMPACTOR,INSTRUMENTATION,LOAD_CURVES,MATERIAL_DATABASE,SECTION_DATABASE",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Sub-Type",
                                "type": "TEXT",
                                "default_value": "-",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Version",
                                "type": "VERSIONING SCHEME COUNTER",
                                "default_value": "01",
                                "allow_null": "NO",
                                "read_only": "NO",
                                "format": "%02d"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Name",
                                "type": "TEXT",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "File",
                                "type": "FILE",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        }
                    ]
                },
                "Attributes": {
                    "Attribute": {
                        "_attributes": {
                            "name": "Status",
                            "type": "TEXT",
                            "default_value": "WIP",
                            "accepted_values": "WIP,OK,Warning,Error"
                        }
                    }
                }
            },
            {
                "_attributes": {
                    "type": "Loadcase_File"
                },
                "Properties": {
                    "Property": [
                        {
                            "_attributes": {
                                "name": "Type",
                                "type": "TEXT",
                                "accepted_values": "ADDED_MASS,BARRIER_POSITIONED,CONTACTS,CONTROL_CARDS,CROSS_SECTIONS,DUMMY_POSITIONED,GROUND_POSITIONED,HEADER,INSTRUMENTATION,INVEL,LOADS,PARAMETERS,SENSORS,TRANSFORMATION",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Sub-Type",
                                "type": "TEXT",
                                "default_value": "-",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Project",
                                "type": "TEXT",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Release",
                                "type": "TEXT",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Model Variant",
                                "type": "TEXT",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Version",
                                "type": "VERSIONING SCHEME COUNTER",
                                "default_value": "01",
                                "allow_null": "NO",
                                "read_only": "NO",
                                "format": "%02d"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Name",
                                "type": "TEXT",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "File",
                                "type": "FILE",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        }
                    ]
                },
                "Attributes": {
                    "Attribute": {
                        "_attributes": {
                            "name": "Status",
                            "type": "TEXT",
                            "default_value": "WIP",
                            "accepted_values": "WIP,OK,Warning,Error"
                        }
                    }
                }
            },
            {
                "_attributes": {
                    "type": "Display_Style"
                },
                "Properties": {
                    "Property": [
                        {
                            "_attributes": {
                                "name": "Version",
                                "type": "VERSIONING SCHEME COUNTER",
                                "default_value": "01",
                                "allow_null": "NO",
                                "read_only": "NO",
                                "format": "%02d"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Name",
                                "type": "TEXT",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Discipline",
                                "type": "TEXT",
                                "default_value": "durability",
                                "accepted_values": "crash,nvh,durability,cfd",
                                "allow_null": "YES",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "File",
                                "type": "FILE",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        }
                    ]
                }
            }
        ]
    }
    "FEATURE_ITEMS": {
        "FEATUREITEM": [
            {
                "_attributes": {
                    "type": "Feature"
                },
                "Properties": {
                    "Property": [
                        {
                            "_attributes": {
                                "name": "Module Id",
                                "type": "TEXT",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Version",
                                "type": "TEXT",
                                "default_value": "0",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Study Version",
                                "type": "STUDY VERSION",
                                "default_value": "0",
                                "allow_null": "YES",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "File Type",
                                "type": "TEXT",
                                "default_value": "ANSA",
                                "allow_null": "NO",
                                "read_only": "YES"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Representation",
                                "type": "TEXT",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "File",
                                "type": "FILE",
                                "allow_null": "YES",
                                "read_only": "NO"
                            }
                        }
                    ]
                },
                "Attributes": {
                    "Attribute": [
                        {
                            "_attributes": {
                                "name": "Name",
                                "type": "TEXT"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Type",
                                "type": "TEXT",
                                "default_value": "Bolt",
                                "accepted_values": "Bolt,Nut,Clip,Spot,Rivet,Screw,Embedded Clip,Other"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "length",
                                "type": "DOUBLE"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "d1",
                                "type": "DOUBLE"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "d2",
                                "type": "DOUBLE"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "d3",
                                "type": "DOUBLE"
                            }
                        }
                    ]
                }
            },
            {
                "_attributes": {
                    "type": "Fastener"
                },
                "Properties": {
                    "Property": [
                        {
                            "_attributes": {
                                "name": "Module Id",
                                "type": "TEXT",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Version",
                                "type": "TEXT",
                                "default_value": "0",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Study Version",
                                "type": "STUDY VERSION",
                                "default_value": "0",
                                "allow_null": "YES",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "File Type",
                                "type": "TEXT",
                                "default_value": "ANSA",
                                "allow_null": "NO",
                                "read_only": "YES"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Representation",
                                "type": "TEXT",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "File",
                                "type": "FILE",
                                "allow_null": "YES",
                                "read_only": "NO"
                            }
                        }
                    ]
                },
                "Attributes": {
                    "Attribute": [
                        {
                            "_attributes": {
                                "name": "Name",
                                "type": "TEXT"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Type",
                                "type": "TEXT",
                                "default_value": "Bolt",
                                "accepted_values": "Bolt,Nut,Clip,Spot,Rivet,Screw,Embedded Clip,Other"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "length",
                                "type": "DOUBLE"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "d1",
                                "type": "DOUBLE"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "d2",
                                "type": "DOUBLE"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "d3",
                                "type": "DOUBLE"
                            }
                        }
                    ]
                }
            },
            {
                "_attributes": {
                    "type": "Stamp"
                },
                "Properties": {
                    "Property": [
                        {
                            "_attributes": {
                                "name": "Module Id",
                                "type": "TEXT",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Version",
                                "type": "TEXT",
                                "default_value": "0",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Study Version",
                                "type": "STUDY VERSION",
                                "default_value": "0",
                                "allow_null": "NO",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "File Type",
                                "type": "TEXT",
                                "default_value": "ANSA",
                                "allow_null": "NO",
                                "read_only": "YES"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Representation",
                                "type": "TEXT",
                                "allow_null": "YES",
                                "read_only": "NO"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "File",
                                "type": "FILE",
                                "allow_null": "YES",
                                "read_only": "NO"
                            }
                        }
                    ]
                },
                "Attributes": {
                    "Attribute": [
                        {
                            "_attributes": {
                                "name": "Name",
                                "type": "TEXT"
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Size",
                                "type": "DOUBLE",
                                "default_value": "0."
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Height",
                                "type": "DOUBLE",
                                "default_value": "0."
                            }
                        },
                        {
                            "_attributes": {
                                "name": "Top",
                                "type": "TEXT"
                            }
                        }
                    ]
                }
            }
        ]
    },
    "DM_Settings": {
        "DM_Setting": [
            {
                "_attributes": {
                    "name": "Software Version",
                    "value": "23.0.1"
                }
            },
            {
                "_attributes": {
                    "name": "adaptation_key_calculation_method",
                    "value": "v1"
                }
            },
            {
                "_attributes": {
                    "name": "avoid_special_chars",
                    "value": "YES"
                }
            },
            {
                "_attributes": {
                    "name": "avoid_special_chars_everywhere",
                    "value": "NO"
                }
            },
            {
                "_attributes": {
                    "name": "display_types_instead_of_object_types",
                    "value": "YES"
                }
            },
            {
                "_attributes": {
                    "name": "flatten_contained_items",
                    "value": "YES"
                }
            },
            {
                "_attributes": {
                    "name": "intermodular_connectivity_links",
                    "value": "NO"
                }
            },
            {
                "_attributes": {
                    "name": "library_dm",
                    "value": "NO"
                }
            },
            {
                "_attributes": {
                    "name": "support_solver_relative_paths",
                    "value": "NO"
                }
            },
            {
                "_attributes": {
                    "name": "target_point_property_name",
                    "value": "Target Point"
                }
            }
        ]
    }
}