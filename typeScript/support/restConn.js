"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require('request');
var addEventPayload = {
    "events": [
        {
            "header": {
                "applicationId": "IbeTest-application1",
                "event": "test-event-1",
                "createdTimestamp": "2018-08-07T10:23:30.000Z"
            },
            "payload": {
                "payloadItems": [
                    {
                        "name": "test-1",
                        "payload-field": "test-event-1"
                    }
                ]
            }
        },
        {
            "header": {
                "applicationId": "IbeTest-application2",
                "event": "test-event-2",
                "createdTimestamp": "2018-08-07T10:23:30.000Z"
            },
            "payload": {
                "payloadItems": [
                    {
                        "name": "test-2",
                        "payload-field": "test-event-2"
                    }
                ]
            }
        },
        {
            "header": {
                "applicationId": "IbeTest-application3",
                "event": "test-event-3",
                "createdTimestamp": "2018-08-07T10:23:30.000Z"
            },
            "payload": {
                "payloadItems": [
                    {
                        "name": "test-3",
                        "payload-field": "test-event-3"
                    }
                ]
            }
        },
        {
            "header": {
                "applicationId": "IbeTest-application4",
                "event": "test-event-4",
                "createdTimestamp": "2018-08-07T10:23:30.000Z"
            },
            "payload": {
                "payloadItems": [
                    {
                        "name": "test-4",
                        "payload-field": "test-event-4"
                    }
                ]
            }
        }
    ]
};
var addEsnPayload = {
    "events": [
        {
            "header": {
                "messageId": "5d80b180-3b4a-48d2-b322-fd8bddee40bd",
                "applicationId": "netflix-internal-gateway",
                "event": "test-event-1",
                "createdTimestamp": "2018-08-07T10:23:30.000Z",
                "keys": {
                    "esn": "ESN0987654IbeTest001",
                    "drmDeviceId": "1231231231230001"
                }
            },
            "payload": {
                "payloadItems": [
                    {
                        "name": "test-1",
                        "payload-field": "test-event-1"
                    }
                ]
            }
        },
        {
            "header": {
                "messageId": "5d80b180-3b4a-48d2-b322-fd8bddee40bd",
                "applicationId": "netflix-internal-gateway",
                "event": "test-event-2",
                "createdTimestamp": "2018-08-07T10:23:30.000Z",
                "keys": {
                    "esn": "ESN0987654IbeTest002",
                    "drmDeviceId": "1231231231230002"
                }
            },
            "payload": {
                "payloadItems": [
                    {
                        "name": "test-2",
                        "payload-field": "test-event-2"
                    }
                ]
            }
        },
        {
            "header": {
                "messageId": "5d80b180-3b4a-48d2-b322-fd8bddee40bd",
                "applicationId": "netflix-internal-gateway",
                "event": "test-event-3",
                "createdTimestamp": "2018-08-07T10:23:30.000Z",
                "keys": {
                    "esn": "ESN0987654IbeTest003",
                    "drmDeviceId": "1231231231230003"
                }
            },
            "payload": {
                "payloadItems": [
                    {
                        "name": "test-3",
                        "payload-field": "test-event-3"
                    }
                ]
            }
        },
        {
            "header": {
                "messageId": "5d80b180-3b4a-48d2-b322-fd8bddee40bd",
                "applicationId": "netflix-internal-gateway",
                "createdTimestamp": "2018-08-07T10:23:30.000Z",
                "keys": {
                    "esn": "ESN0987654IbeTest004",
                    "drmDeviceId": "1231231231230004"
                }
            },
            "payload": {
                "payloadItems": [
                    {
                        "name": "test-4",
                        "payload-field": "test-event-4"
                    }
                ]
            }
        }
    ]
};
var jsonBody = JSON.stringify(addEventPayload);
var esnjsonBody = JSON.stringify(addEsnPayload);
var createEvent = {
    method: 'PUT',
    url: 'https://scms-dev.bskyb.com/008/event-data-service/events/seedTestEventData',
    headers: { 'Content-Type': 'application/json', 'X-Authorization': 'UAT_USER' },
    body: jsonBody,
};
var createESNEvent = {
    method: 'PUT',
    url: 'https://scms-dev.bskyb.com/008/event-data-service/events/seedTestEventData',
    headers: { 'Content-Type': 'application/json', 'X-Authorization': 'UAT_USER' },
    body: esnjsonBody,
};
var restConnection = /** @class */ (function () {
    function restConnection() {
    }
    restConnection.prototype.putEvent = function () {
        request(createEvent);
        console.log("++++++++ Generic Events inserted Sucessfully ++++++");
    };
    ;
    restConnection.prototype.putESNEvent = function () {
        request(createESNEvent);
        console.log("++++++++ ESN Events inserted Sucessfully +++++++");
    };
    ;
    return restConnection;
}());
exports.restConnection = restConnection;
