module.exports = {
    data : [
        {
          "name": "TestFlow",
          "latest": true,
          "id": "41ff0fd7-7aa3-4e63-a241-b0ca25b4b8cc",
          "bpmndataId": "5c37015511ce1c41d0be7855",
          "_isDeleted": false,
          "_version": "bef75433-c5f7-4865-92b7-0bdb68cc1078",
          "workflowInstances": []
        },
        {
          "name": "SubFlow",
          "latest": true,
          "id": "a54f8ae8-074f-431a-8191-fc284b24cb51",
          "bpmndataId": "5c37017411ce1c41d0be7857",
          "_isDeleted": false,
          "_version": "99376d92-0c79-4420-83c9-10bf89bbf5c0",
          "workflowInstances": [
            {
              "workflowDefinitionName": "SubFlow",
              "workflowDefinitionId": "a54f8ae8-074f-431a-8191-fc284b24cb51",
              "processVariables": {
                "_operation": "create",
                "_modifiers": [
                  "judith"
                ],
                "_modelInstance": {
                  "key": "new",
                  "value": "key",
                  "locale": "us",
                  "id": "58acae28-8707-4b66-b5e1-764d6149364f",
                  "_type": "Literal",
                  "_createdBy": "judith",
                  "_modifiedBy": "judith",
                  "_createdOn": "2019-01-10T08:35:18.179Z",
                  "_modifiedOn": "2019-01-10T08:35:18.179Z",
                  "_isDeleted": false,
                  "_version": "6289a59e-ce86-417b-ba30-f81dda5c9bdf"
                },
                "_modelId": "58acae28-8707-4b66-b5e1-764d6149364f",
                "_maker_checker_impl": "v2"
              },
              "id": "5c3703c611ce1c41d0be785d",
              "_isDeleted": false,
              "processes": [
                {
                  "processDefinitionName": "SubFlow",
                  "processDefinitionBpmnId": "Process_1",
                  "_processTokens": {
                    "b12435d4-d669-4401-84ff-77b9b0fa4a79": {
                      "name": "Start",
                      "startTime": "2019-01-10T08:35:18.248Z",
                      "bpmnId": "StartEvent_1",
                      "id": "b12435d4-d669-4401-84ff-77b9b0fa4a79",
                      "status": "complete",
                      "endTime": "2019-01-10T08:35:18.272Z"
                    },
                    "5d5d071b-05e8-487c-abdd-97ea9d3a0bd8": {
                      "name": "TaskA",
                      "startTime": "2019-01-10T08:35:18.272Z",
                      "bpmnId": "Task_06evaqm",
                      "id": "5d5d071b-05e8-487c-abdd-97ea9d3a0bd8",
                      "status": "complete",
                      "endTime": "2019-01-10T08:35:18.364Z"
                    },
                    "39fbdb2e-4c39-4080-8bb3-7f49ecb36fb3": {
                      "name": "Sub",
                      "startTime": "2019-01-10T08:35:18.364Z",
                      "bpmnId": "Task_1cqtpkj",
                      "id": "39fbdb2e-4c39-4080-8bb3-7f49ecb36fb3",
                      "status": "pending"
                    }
                  },
                  "_processVariables": {
                    "_operation": "create",
                    "_modifiers": [
                      "judith"
                    ],
                    "_modelInstance": {
                      "key": "new",
                      "value": "key",
                      "locale": "us",
                      "id": "58acae28-8707-4b66-b5e1-764d6149364f",
                      "_type": "Literal",
                      "_createdBy": "judith",
                      "_modifiedBy": "judith",
                      "_createdOn": "2019-01-10T08:35:18.179Z",
                      "_modifiedOn": "2019-01-10T08:35:18.179Z",
                      "_isDeleted": false,
                      "_version": "6289a59e-ce86-417b-ba30-f81dda5c9bdf"
                    },
                    "_modelId": "58acae28-8707-4b66-b5e1-764d6149364f",
                    "_maker_checker_impl": "v2",
                    "_workflowInstanceId": "5c3703c611ce1c41d0be785d"
                  },
                  "_processTimerEvents": {
                    "pendingTimeouts": {},
                    "endedTimeouts": {},
                    "timeoutIds": {},
                    "timerIds": {}
                  },
                  "_synchronizeFlow": {},
                  "passiveWait": false,
                  "_status": "running",
                  "id": "5c3703c611ce1c41d0be785e",
                  "processDefinitionId": "5c37017711ce1c41d0be7859",
                  "_isDeleted": false,
                  "_oldVersion": "453f3b6c-f0ea-4998-9563-b98780e4bcf1",
                  "_version": "fefcc7b6-c469-4342-827f-6378e98d0866",
                  "workflowInstanceId": "5c3703c611ce1c41d0be785d"
                },
                {
                  "processDefinitionName": "SubFlow$Sub",
                  "processDefinitionBpmnId": "Task_1cqtpkj",
                  "_processTokens": {
                    "15df806a-a782-4018-815d-a0fe901a732b": {
                      "name": "Start",
                      "startTime": "2019-01-10T08:35:18.444Z",
                      "bpmnId": "StartEvent_14y33p9",
                      "id": "15df806a-a782-4018-815d-a0fe901a732b",
                      "status": "complete",
                      "endTime": "2019-01-10T08:35:18.467Z"
                    },
                    "f7f8d850-b62d-4d94-9242-7ce35e2e0024": {
                      "name": "Validate",
                      "startTime": "2019-01-10T08:35:18.466Z",
                      "bpmnId": "Task_1awckz3",
                      "id": "f7f8d850-b62d-4d94-9242-7ce35e2e0024",
                      "status": "complete",
                      "endTime": "2019-01-10T08:35:18.521Z"
                    },
                    "f6611749-0322-47dd-add6-18c4ac7b99e1": {
                      "name": "TaskA",
                      "startTime": "2019-01-10T08:35:18.521Z",
                      "bpmnId": "Task_035fd32",
                      "id": "f6611749-0322-47dd-add6-18c4ac7b99e1",
                      "status": "pending"
                    },
                    "6a0be5a3-7904-4fe1-bc78-f0f973d4f101": {
                      "name": "TaskB",
                      "startTime": "2019-01-10T08:35:18.521Z",
                      "bpmnId": "Task_0cqu7r6",
                      "id": "6a0be5a3-7904-4fe1-bc78-f0f973d4f101",
                      "status": "pending"
                    }
                  },
                  "parentToken": {
                    "name": "Sub",
                    "startTime": "2019-01-10T08:35:18.364Z",
                    "bpmnId": "Task_1cqtpkj",
                    "id": "39fbdb2e-4c39-4080-8bb3-7f49ecb36fb3"
                  },
                  "_processVariables": {
                    "_modelInstance": {
                      "key": "new",
                      "value": "key",
                      "locale": "us",
                      "id": "58acae28-8707-4b66-b5e1-764d6149364f",
                      "_type": "Literal",
                      "_createdBy": "judith",
                      "_modifiedBy": "judith",
                      "_createdOn": "2019-01-10T08:35:18.179Z",
                      "_modifiedOn": "2019-01-10T08:35:18.179Z",
                      "_isDeleted": false,
                      "_version": "6289a59e-ce86-417b-ba30-f81dda5c9bdf"
                    },
                    "_operation": "create",
                    "_modifiers": [
                      "judith"
                    ],
                    "_modelId": "58acae28-8707-4b66-b5e1-764d6149364f",
                    "_maker_checker_impl": "v2",
                    "_workflowInstanceId": "5c3703c611ce1c41d0be785d"
                  },
                  "_parentProcessVariables": {
                    "_operation": "create",
                    "_modifiers": [
                      "judith"
                    ],
                    "_modelInstance": {
                      "key": "new",
                      "value": "key",
                      "locale": "us",
                      "id": "58acae28-8707-4b66-b5e1-764d6149364f",
                      "_type": "Literal",
                      "_createdBy": "judith",
                      "_modifiedBy": "judith",
                      "_createdOn": "2019-01-10T08:35:18.179Z",
                      "_modifiedOn": "2019-01-10T08:35:18.179Z",
                      "_isDeleted": false,
                      "_version": "6289a59e-ce86-417b-ba30-f81dda5c9bdf"
                    },
                    "_modelId": "58acae28-8707-4b66-b5e1-764d6149364f",
                    "_maker_checker_impl": "v2",
                    "_workflowInstanceId": "5c3703c611ce1c41d0be785d"
                  },
                  "_processTimerEvents": {
                    "pendingTimeouts": {},
                    "endedTimeouts": {},
                    "timeoutIds": {},
                    "timerIds": {}
                  },
                  "_synchronizeFlow": {},
                  "passiveWait": false,
                  "_status": "running",
                  "id": "5c3703c611ce1c41d0be7862",
                  "processDefinitionId": "5c37017711ce1c41d0be7858",
                  "parentProcessInstanceId": "5c3703c611ce1c41d0be785e",
                  "_isDeleted": false,
                  "_oldVersion": "b9738a7b-5bc6-47c8-84aa-96a5fc20b942",
                  "_version": "2f9882d6-7a56-4f4d-8846-db2e7e78572c",
                  "workflowInstanceId": "5c3703c611ce1c41d0be785d"
                }
              ]
            }
          ]
        },
        {
          "name": "LoanApplication",
          "latest": true,
          "id": "b63a16d0-93a3-45d7-b1c9-f81830f8ebe0",
          "_isDeleted": false,
          "_version": "16036506-2ad4-4a95-a46d-d1b4314859e0",
          "workflowInstances": [
            {
              "workflowDefinitionName": "LoanApplication",
              "workflowDefinitionId": "b63a16d0-93a3-45d7-b1c9-f81830f8ebe0",
              "processVariables": {
                "_operation": "create",
                "_modifiers": [
                  "judith"
                ],
                "_modelInstance": {
                  "type": "PERSONAL_LOAN",
                  "amount": 60000,
                  "currency": "USD",
                  "tenure": 36,
                  "status": "pending",
                  "employment": {
                    "employmentType": "FULL_TIME",
                    "monthlyIncome": 10000,
                    "yearsOfExperience": 4,
                    "_isDeleted": false
                  },
                  "incomeSources": [],
                  "repaymentMode": {
                    "_isDeleted": false
                  },
                  "id": "4398b3c2-a2c4-4a87-92c2-f2115b909f72",
                  "appUserId": "3bca9774-f4d9-11e6-bc64-92361f002003",
                  "_type": "LoanApplication",
                  "_createdBy": "judith",
                  "_modifiedBy": "judith",
                  "_createdOn": "2019-01-10T08:21:19.560Z",
                  "_modifiedOn": "2019-01-10T08:21:19.560Z",
                  "_isDeleted": false,
                  "_version": "19526750-4178-4964-8d01-64ce16329363",
                  "preApproved": false
                },
                "_modelId": "4398b3c2-a2c4-4a87-92c2-f2115b909f72",
                "_maker_checker_impl": "v2"
              },
              "id": "5c37007f11ce1c41d0be783c",
              "_isDeleted": false,
              "processes": [
                {
                  "processDefinitionName": "LoanApplication",
                  "processDefinitionBpmnId": "Process_1",
                  "_processTokens": {
                    "535b9014-457d-45b1-a869-b2b9f435c2c4": {
                      "name": "Loan Application Initiated",
                      "startTime": "2019-01-10T08:21:19.710Z",
                      "bpmnId": "StartEvent_1",
                      "id": "535b9014-457d-45b1-a869-b2b9f435c2c4",
                      "status": "complete",
                      "endTime": "2019-01-10T08:21:19.759Z"
                    },
                    "e13edb12-7749-4080-aab8-e3f1acb4193d": {
                      "name": "Loan Calculations",
                      "startTime": "2019-01-10T08:21:19.757Z",
                      "bpmnId": "ScriptTask_0996onu",
                      "id": "e13edb12-7749-4080-aab8-e3f1acb4193d",
                      "status": "complete",
                      "endTime": "2019-01-10T08:21:19.831Z"
                    },
                    "5cae8636-9a00-4dc6-b9c8-309b6d2e302e": {
                      "name": "Get User Profile",
                      "startTime": "2019-01-10T08:21:19.831Z",
                      "bpmnId": "ServiceTask_1u9xjo4",
                      "id": "5cae8636-9a00-4dc6-b9c8-309b6d2e302e",
                      "status": "complete",
                      "error": {
                        "stack": "Error: connect ECONNREFUSED 127.0.0.1:3000\n    at Object._errnoException (util.js:1022:11)\n    at _exceptionWithHostPort (util.js:1044:20)\n    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1182:14)",
                        "message": "connect ECONNREFUSED 127.0.0.1:3000",
                        "code": "ECONNREFUSED",
                        "errno": "ECONNREFUSED",
                        "syscall": "connect",
                        "address": "127.0.0.1",
                        "port": 3000
                      },
                      "endTime": "2019-01-10T08:21:20.936Z"
                    },
                    "2a3b5663-fc68-4d77-93e0-a1d9adb480f1": {
                      "name": "Set User Region",
                      "startTime": "2019-01-10T08:21:20.935Z",
                      "bpmnId": "ScriptTask_0pwu9jj",
                      "id": "2a3b5663-fc68-4d77-93e0-a1d9adb480f1",
                      "status": "complete",
                      "message": {
                        "urlOptions": {
                          "url": "http://localhost:3000/api/AppUsers/me/profile?access_token=wvXj440875M5qU7XzklbWfnTPNhGMOHdB83Cyfgyn8ikofChIzgcD5fJnHsPmjX9",
                          "method": "GET",
                          "json": {},
                          "timeout": 20000
                        },
                        "body": "undefined",
                        "statusCode": "undefined"
                      },
                      "endTime": "2019-01-10T08:21:21.008Z"
                    },
                    "50e5210a-80ef-4e86-97d9-b544888293c4": {
                      "name": "Fetch Business rule ",
                      "startTime": "2019-01-10T08:21:21.008Z",
                      "bpmnId": "ServiceTask_00ixuvw",
                      "id": "50e5210a-80ef-4e86-97d9-b544888293c4",
                      "status": "complete",
                      "error": {
                        "stack": "Error: connect ECONNREFUSED 127.0.0.1:3000\n    at Object._errnoException (util.js:1022:11)\n    at _exceptionWithHostPort (util.js:1044:20)\n    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1182:14)",
                        "message": "connect ECONNREFUSED 127.0.0.1:3000",
                        "code": "ECONNREFUSED",
                        "errno": "ECONNREFUSED",
                        "syscall": "connect",
                        "address": "127.0.0.1",
                        "port": 3000
                      },
                      "endTime": "2019-01-10T08:21:22.085Z"
                    },
                    "5a0f5688-7cdd-4c4c-bc00-5228f141e583": {
                      "name": "loan amount decision gateways",
                      "startTime": "2019-01-10T08:21:22.085Z",
                      "bpmnId": "ExclusiveGateway_00bdt0m",
                      "id": "5a0f5688-7cdd-4c4c-bc00-5228f141e583",
                      "status": "complete",
                      "message": {
                        "urlOptions": {
                          "url": "http://localhost:3000/api/DecisionTables/exec/undefined?access_token=wvXj440875M5qU7XzklbWfnTPNhGMOHdB83Cyfgyn8ikofChIzgcD5fJnHsPmjX9",
                          "method": "POST",
                          "json": {
                            "amount": 60000,
                            "tenure": 36,
                            "employment": {
                              "employmentType": "FULL_TIME",
                              "monthlyIncome": 10000,
                              "yearsOfExperience": 4,
                              "_isDeleted": false
                            },
                            "incomeSources": [],
                            "type": "PERSONAL_LOAN"
                          },
                          "timeout": 20000
                        },
                        "body": "undefined",
                        "statusCode": "undefined"
                      },
                      "endTime": "2019-01-10T08:21:22.215Z"
                    },
                    "4d9d121f-8682-4b48-994f-6d75f79951e8": {
                      "name": "Upload Documents",
                      "startTime": "2019-01-10T08:21:22.214Z",
                      "bpmnId": "UserTask_0ksq0ed",
                      "id": "4d9d121f-8682-4b48-994f-6d75f79951e8",
                      "status": "complete",
                      "message": {
                        "urlOptions": {
                          "url": "http://localhost:3000/api/DecisionTables/exec/undefined?access_token=wvXj440875M5qU7XzklbWfnTPNhGMOHdB83Cyfgyn8ikofChIzgcD5fJnHsPmjX9",
                          "method": "POST",
                          "json": {
                            "amount": 60000,
                            "tenure": 36,
                            "employment": {
                              "employmentType": "FULL_TIME",
                              "monthlyIncome": 10000,
                              "yearsOfExperience": 4,
                              "_isDeleted": false
                            },
                            "incomeSources": [],
                            "type": "PERSONAL_LOAN"
                          },
                          "timeout": 20000
                        },
                        "body": "undefined",
                        "statusCode": "undefined"
                      },
                      "endTime": "2019-01-10T08:21:42.565Z"
                    },
                    "c17dcd8c-2f86-4204-bb91-74666c05507a": {
                      "name": "document gateway",
                      "startTime": "2019-01-10T08:21:42.565Z",
                      "bpmnId": "ExclusiveGateway_02njxnv",
                      "id": "c17dcd8c-2f86-4204-bb91-74666c05507a",
                      "status": "complete",
                      "message": {},
                      "endTime": "2019-01-10T08:21:42.649Z"
                    },
                    "5483c661-a9ee-4d97-9e9a-45c70070d51a": {
                      "name": "Loan Approval Desk",
                      "startTime": "2019-01-10T08:21:42.648Z",
                      "bpmnId": "UserTask_1fgzgom",
                      "id": "5483c661-a9ee-4d97-9e9a-45c70070d51a",
                      "status": "pending",
                      "message": {}
                    }
                  },
                  "_processVariables": {
                    "_operation": "create",
                    "_modifiers": [
                      "judith"
                    ],
                    "_modelInstance": {
                      "type": "PERSONAL_LOAN",
                      "amount": 60000,
                      "currency": "USD",
                      "tenure": 36,
                      "status": "pending",
                      "employment": {
                        "employmentType": "FULL_TIME",
                        "monthlyIncome": 10000,
                        "yearsOfExperience": 4,
                        "_isDeleted": false
                      },
                      "incomeSources": [],
                      "repaymentMode": {
                        "_isDeleted": false
                      },
                      "id": "4398b3c2-a2c4-4a87-92c2-f2115b909f72",
                      "appUserId": "3bca9774-f4d9-11e6-bc64-92361f002003",
                      "_type": "LoanApplication",
                      "_createdBy": "judith",
                      "_modifiedBy": "judith",
                      "_createdOn": "2019-01-10T08:21:19.560Z",
                      "_modifiedOn": "2019-01-10T08:21:19.560Z",
                      "_isDeleted": false,
                      "_version": "19526750-4178-4964-8d01-64ce16329363",
                      "preApproved": false
                    },
                    "_modelId": "4398b3c2-a2c4-4a87-92c2-f2115b909f72",
                    "_maker_checker_impl": "v2",
                    "_workflowInstanceId": "5c37007f11ce1c41d0be783c",
                    "risk": "dummyValue",
                    "_updates": {
                      "set": {},
                      "unset": {}
                    },
                    "ud_status": "uploaded",
                    "documentsInfo": "4398b3c2-a2c4-4a87-92c2-f2115b909f72"
                  },
                  "_processTimerEvents": {
                    "pendingTimeouts": {},
                    "endedTimeouts": {},
                    "timeoutIds": {},
                    "timerIds": {}
                  },
                  "_synchronizeFlow": {},
                  "passiveWait": true,
                  "_status": "running",
                  "id": "5c37007f11ce1c41d0be783d",
                  "processDefinitionId": "5c36e499418bb53878ce5265",
                  "_isDeleted": false,
                  "_oldVersion": "4aa3e85c-03fa-45ac-80b4-e297ed96cfd5",
                  "_version": "b5a964fc-a165-4aba-a849-762c94ec3542",
                  "workflowInstanceId": "5c37007f11ce1c41d0be783c"
                }
              ]
            },
            {
              "workflowDefinitionName": "LoanApplication",
              "workflowDefinitionId": "b63a16d0-93a3-45d7-b1c9-f81830f8ebe0",
              "processVariables": {
                "_operation": "create",
                "_modifiers": [
                  "judith"
                ],
                "_modelInstance": {
                  "type": "CAR_LOAN",
                  "amount": 1080000,
                  "currency": "USD",
                  "tenure": 24,
                  "status": "pending",
                  "employment": {
                    "employmentType": "FULL_TIME",
                    "monthlyIncome": 90000,
                    "yearsOfExperience": 5,
                    "_isDeleted": false
                  },
                  "incomeSources": [],
                  "repaymentMode": {
                    "_isDeleted": false
                  },
                  "id": "53bc37d7-8992-4503-b3ca-f6d3cbf41698",
                  "appUserId": "3bca9774-f4d9-11e6-bc64-92361f002003",
                  "_type": "LoanApplication",
                  "_createdBy": "judith",
                  "_modifiedBy": "judith",
                  "_createdOn": "2019-01-10T08:22:13.641Z",
                  "_modifiedOn": "2019-01-10T08:22:13.641Z",
                  "_isDeleted": false,
                  "_version": "088396f5-81c1-4d2e-8f1a-41499bb3b4a7",
                  "preApproved": false
                },
                "_modelId": "53bc37d7-8992-4503-b3ca-f6d3cbf41698",
                "_maker_checker_impl": "v2"
              },
              "id": "5c3700b511ce1c41d0be7849",
              "_isDeleted": false,
              "processes": [
                {
                  "processDefinitionName": "LoanApplication",
                  "processDefinitionBpmnId": "Process_1",
                  "_processTokens": {
                    "bafa8479-8d7f-4d00-ba9b-d1d8afa87092": {
                      "name": "Loan Application Initiated",
                      "startTime": "2019-01-10T08:22:13.722Z",
                      "bpmnId": "StartEvent_1",
                      "id": "bafa8479-8d7f-4d00-ba9b-d1d8afa87092",
                      "status": "complete",
                      "endTime": "2019-01-10T08:22:13.758Z"
                    },
                    "1018a523-57e9-4d81-b28f-d76d735ea173": {
                      "name": "Loan Calculations",
                      "startTime": "2019-01-10T08:22:13.757Z",
                      "bpmnId": "ScriptTask_0996onu",
                      "id": "1018a523-57e9-4d81-b28f-d76d735ea173",
                      "status": "complete",
                      "endTime": "2019-01-10T08:22:13.823Z"
                    },
                    "e8654c07-b1bf-48de-a3d7-f8d158f69ae7": {
                      "name": "Get User Profile",
                      "startTime": "2019-01-10T08:22:13.823Z",
                      "bpmnId": "ServiceTask_1u9xjo4",
                      "id": "e8654c07-b1bf-48de-a3d7-f8d158f69ae7",
                      "status": "complete",
                      "error": {
                        "stack": "Error: connect ECONNREFUSED 127.0.0.1:3000\n    at Object._errnoException (util.js:1022:11)\n    at _exceptionWithHostPort (util.js:1044:20)\n    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1182:14)",
                        "message": "connect ECONNREFUSED 127.0.0.1:3000",
                        "code": "ECONNREFUSED",
                        "errno": "ECONNREFUSED",
                        "syscall": "connect",
                        "address": "127.0.0.1",
                        "port": 3000
                      },
                      "endTime": "2019-01-10T08:22:15.203Z"
                    },
                    "75e100a7-926b-4680-806b-a76b73161364": {
                      "name": "Set User Region",
                      "startTime": "2019-01-10T08:22:15.064Z",
                      "bpmnId": "ScriptTask_0pwu9jj",
                      "id": "75e100a7-926b-4680-806b-a76b73161364",
                      "status": "complete",
                      "message": {
                        "urlOptions": {
                          "url": "http://localhost:3000/api/AppUsers/me/profile?access_token=wvXj440875M5qU7XzklbWfnTPNhGMOHdB83Cyfgyn8ikofChIzgcD5fJnHsPmjX9",
                          "method": "GET",
                          "json": {},
                          "timeout": 20000
                        },
                        "body": "undefined",
                        "statusCode": "undefined"
                      },
                      "endTime": "2019-01-10T08:22:15.272Z"
                    },
                    "7a2235e2-feef-470b-89ec-280416bad3ad": {
                      "name": "Fetch Business rule ",
                      "startTime": "2019-01-10T08:22:15.272Z",
                      "bpmnId": "ServiceTask_00ixuvw",
                      "id": "7a2235e2-feef-470b-89ec-280416bad3ad",
                      "status": "complete",
                      "error": {
                        "stack": "Error: connect ECONNREFUSED 127.0.0.1:3000\n    at Object._errnoException (util.js:1022:11)\n    at _exceptionWithHostPort (util.js:1044:20)\n    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1182:14)",
                        "message": "connect ECONNREFUSED 127.0.0.1:3000",
                        "code": "ECONNREFUSED",
                        "errno": "ECONNREFUSED",
                        "syscall": "connect",
                        "address": "127.0.0.1",
                        "port": 3000
                      },
                      "endTime": "2019-01-10T08:22:16.545Z"
                    },
                    "ec8d56e8-7942-40fb-a149-f04a08519deb": {
                      "name": "loan amount decision gateways",
                      "startTime": "2019-01-10T08:22:16.454Z",
                      "bpmnId": "ExclusiveGateway_00bdt0m",
                      "id": "ec8d56e8-7942-40fb-a149-f04a08519deb",
                      "status": "complete",
                      "message": {
                        "urlOptions": {
                          "url": "http://localhost:3000/api/DecisionTables/exec/undefined?access_token=wvXj440875M5qU7XzklbWfnTPNhGMOHdB83Cyfgyn8ikofChIzgcD5fJnHsPmjX9",
                          "method": "POST",
                          "json": {
                            "amount": 1080000,
                            "tenure": 24,
                            "employment": {
                              "employmentType": "FULL_TIME",
                              "monthlyIncome": 90000,
                              "yearsOfExperience": 5,
                              "_isDeleted": false
                            },
                            "incomeSources": [],
                            "type": "CAR_LOAN"
                          },
                          "timeout": 20000
                        },
                        "body": "undefined",
                        "statusCode": "undefined"
                      },
                      "endTime": "2019-01-10T08:22:16.605Z"
                    },
                    "8569926c-42b7-4c09-aad2-1f2c88cca428": {
                      "name": "Upload Documents",
                      "startTime": "2019-01-10T08:22:16.605Z",
                      "bpmnId": "UserTask_0ksq0ed",
                      "id": "8569926c-42b7-4c09-aad2-1f2c88cca428",
                      "status": "pending",
                      "message": {
                        "urlOptions": {
                          "url": "http://localhost:3000/api/DecisionTables/exec/undefined?access_token=wvXj440875M5qU7XzklbWfnTPNhGMOHdB83Cyfgyn8ikofChIzgcD5fJnHsPmjX9",
                          "method": "POST",
                          "json": {
                            "amount": 1080000,
                            "tenure": 24,
                            "employment": {
                              "employmentType": "FULL_TIME",
                              "monthlyIncome": 90000,
                              "yearsOfExperience": 5,
                              "_isDeleted": false
                            },
                            "incomeSources": [],
                            "type": "CAR_LOAN"
                          },
                          "timeout": 20000
                        },
                        "body": "undefined",
                        "statusCode": "undefined"
                      }
                    }
                  },
                  "_processVariables": {
                    "_operation": "create",
                    "_modifiers": [
                      "judith"
                    ],
                    "_modelInstance": {
                      "type": "CAR_LOAN",
                      "amount": 1080000,
                      "currency": "USD",
                      "tenure": 24,
                      "status": "pending",
                      "employment": {
                        "employmentType": "FULL_TIME",
                        "monthlyIncome": 90000,
                        "yearsOfExperience": 5,
                        "_isDeleted": false
                      },
                      "incomeSources": [],
                      "repaymentMode": {
                        "_isDeleted": false
                      },
                      "id": "53bc37d7-8992-4503-b3ca-f6d3cbf41698",
                      "appUserId": "3bca9774-f4d9-11e6-bc64-92361f002003",
                      "_type": "LoanApplication",
                      "_createdBy": "judith",
                      "_modifiedBy": "judith",
                      "_createdOn": "2019-01-10T08:22:13.641Z",
                      "_modifiedOn": "2019-01-10T08:22:13.641Z",
                      "_isDeleted": false,
                      "_version": "088396f5-81c1-4d2e-8f1a-41499bb3b4a7",
                      "preApproved": false
                    },
                    "_modelId": "53bc37d7-8992-4503-b3ca-f6d3cbf41698",
                    "_maker_checker_impl": "v2",
                    "_workflowInstanceId": "5c3700b511ce1c41d0be7849",
                    "risk": "dummyValue",
                    "_updates": {
                      "set": {},
                      "unset": {}
                    }
                  },
                  "_processTimerEvents": {
                    "pendingTimeouts": {},
                    "endedTimeouts": {},
                    "timeoutIds": {},
                    "timerIds": {}
                  },
                  "_synchronizeFlow": {},
                  "passiveWait": true,
                  "_status": "running",
                  "id": "5c3700b511ce1c41d0be784a",
                  "processDefinitionId": "5c36e499418bb53878ce5265",
                  "_isDeleted": false,
                  "_oldVersion": "5d30f01b-b3c3-4560-8aab-495bfac3e339",
                  "_version": "39922aa5-6289-4d53-b866-a942588c2459",
                  "workflowInstanceId": "5c3700b511ce1c41d0be7849"
                }
              ]
            }
          ]
        }
      ]
}