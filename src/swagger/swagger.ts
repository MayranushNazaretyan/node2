export const swaggerDocument = {
    "swagger" : "2.0",
    "info" : {
        "description" : "This is a sample API\n",
        "version" : "1.0.0",
        "title" : "node2",
        "termsOfService" : "http://swagger.io/terms/",
        "contact" : {
            "email" : "mayranush_nazaretyan@epam.com"
        },
        "license" : {
            "name" : "Apache 2.0",
            "url" : "http://www.apache.org/licenses/LICENSE-2.0.html"
        }
    },
    "host" : "localhost:3000",
    "basePath" : "/",
    "tags" : [ {
        "name" : "user",
        "description" : "Api for user"
    } ],
    "schemes" : [ "http" ],
    "paths" : {
        "/user" : {
            "get" : {
                "tags" : [ "user" ],
                "summary" : "Get users",
                "description" : "Get all users",
                "operationId" : "getUsers",
                "produces" : [ "application/json" ],
                "parameters" : [ {
                    "in" : "header",
                    "name" : "authorization",
                    "type" : "string",
                    "required" : true
                }, {
                    "in" : "query",
                    "name" : "loginSubstring",
                    "type" : "string",
                    "required" : true,
                    "description" : "login path of the user to get"
                }, {
                    "in" : "query",
                    "name" : "limit",
                    "type" : "number",
                    "required" : true,
                    "description" : "limit of the user to get"
                } ],
                "responses" : {
                    "200" : {
                        "description" : "OK",
                        "schema" : {
                            "type" : "array",
                            "items" : {
                                "$ref" : "#/definitions/User"
                            }
                        }
                    },
                    "400" : {
                        "description" : "Bad request"
                    },
                    "401" : {
                        "description" : "Unauthorized"
                    },
                    "403" : {
                        "description" : "Forbidden"
                    },
                    "404" : {
                        "description" : "Not Found"
                    },
                    "500" : {
                        "description" : "Internal Server Error"
                    }
                }
            },
            "post" : {
                "tags" : [ "user" ],
                "summary" : "Create a new user",
                "description" : "Create a new user",
                "operationId" : "CreateUser",
                "produces" : [ "application/json" ],
                "parameters" : [ {
                    "in" : "header",
                    "name" : "Authorization",
                    "type" : "string",
                    "required" : true
                }, {
                    "name" : "body",
                    "in" : "body",
                    "description" : "new user",
                    "required" : true,
                    "schema" : {
                        "$ref" : "#/definitions/User"
                    }
                } ],
                "responses" : {
                    "200" : {
                        "description" : "OK",
                        "schema" : {
                            "type" : "object",
                            "items" : {
                                "$ref" : "#/definitions/User"
                            }
                        }
                    },
                    "400" : {
                        "description" : "Bad request"
                    },
                    "401" : {
                        "description" : "Unauthorized"
                    },
                    "403" : {
                        "description" : "Forbidden"
                    },
                    "404" : {
                        "description" : "Not Found"
                    },
                    "500" : {
                        "description" : "Internal Server Error"
                    }
                }
            }
        },
        "/user/{id}" : {
            "get" : {
                "tags" : [ "user" ],
                "summary" : "Get user",
                "description" : "Get user by id",
                "operationId" : "getUser",
                "produces" : [ "application/json" ],
                "parameters" : [ {
                    "name" : "id",
                    "in" : "path",
                    "description" : "User id",
                    "required" : true,
                    "type" : "string"
                }, {
                    "in" : "header",
                    "name" : "Authorization",
                    "type" : "string",
                    "required" : true
                } ],
                "responses" : {
                    "200" : {
                        "description" : "OK",
                        "schema" : {
                            "type" : "array",
                            "items" : {
                                "$ref" : "#/definitions/User"
                            }
                        }
                    },
                    "400" : {
                        "description" : "Bad request"
                    },
                    "401" : {
                        "description" : "Unauthorized"
                    },
                    "403" : {
                        "description" : "Forbidden"
                    },
                    "404" : {
                        "description" : "Not Found"
                    },
                    "500" : {
                        "description" : "Internal Server Error"
                    }
                }
            },
            "put" : {
                "tags" : [ "user" ],
                "summary" : "Update user",
                "description" : "Update user",
                "operationId" : "UpdateUser",
                "produces" : [ "application/json" ],
                "parameters" : [ {
                    "name" : "id",
                    "in" : "path",
                    "description" : "User id",
                    "required" : true,
                    "type" : "string"
                }, {
                    "in" : "header",
                    "name" : "Authorization",
                    "type" : "string",
                    "required" : true
                }, {
                    "name" : "body",
                    "in" : "body",
                    "description" : "update user",
                    "required" : true,
                    "schema" : {
                        "$ref" : "#/definitions/User"
                    }
                } ],
                "responses" : {
                    "200" : {
                        "description" : "OK",
                        "schema" : {
                            "$ref" : "#/definitions/User"
                        }
                    },
                    "400" : {
                        "description" : "Bad request"
                    },
                    "401" : {
                        "description" : "Unauthorized"
                    },
                    "403" : {
                        "description" : "Forbidden"
                    },
                    "404" : {
                        "description" : "Not Found"
                    },
                    "500" : {
                        "description" : "Internal Server Error"
                    }
                }
            },
            "delete" : {
                "tags" : [ "user" ],
                "summary" : "Delete user",
                "description" : "Delete user",
                "operationId" : "DeleteUser",
                "produces" : [ "application/json" ],
                "parameters" : [ {
                    "name" : "id",
                    "in" : "path",
                    "description" : "User id",
                    "required" : true,
                    "type" : "string"
                }, {
                    "in" : "header",
                    "name" : "Authorization",
                    "type" : "string",
                    "required" : true
                } ],
                "responses" : {
                    "200" : {
                        "description" : "OK"
                    },
                    "400" : {
                        "description" : "Bad request"
                    },
                    "401" : {
                        "description" : "Unauthorized"
                    },
                    "403" : {
                        "description" : "Forbidden"
                    },
                    "404" : {
                        "description" : "Not Found"
                    },
                    "500" : {
                        "description" : "Internal Server Error"
                    }
                }
            }
        },
        "/group" : {
            "get" : {
                "tags" : [ "group" ],
                "summary" : "Get groups",
                "description" : "Get all groups",
                "operationId" : "getGroups",
                "produces" : [ "application/json" ],
                "parameters" : [ {
                    "in" : "header",
                    "name" : "Authorization",
                    "type" : "string",
                    "required" : true
                } ],
                "responses" : {
                    "200" : {
                        "description" : "OK",
                        "schema" : {
                            "type" : "array",
                            "items" : {
                                "$ref" : "#/definitions/Group"
                            }
                        }
                    },
                    "400" : {
                        "description" : "Bad request"
                    },
                    "401" : {
                        "description" : "Unauthorized"
                    },
                    "403" : {
                        "description" : "Forbidden"
                    },
                    "404" : {
                        "description" : "Not Found"
                    },
                    "500" : {
                        "description" : "Internal Server Error"
                    }
                }
            },
            "post" : {
                "tags" : [ "group" ],
                "summary" : "Create a new group",
                "description" : "Create a new group",
                "operationId" : "CreateGroup",
                "produces" : [ "application/json" ],
                "parameters" : [ {
                    "in" : "header",
                    "name" : "Authorization",
                    "type" : "string",
                    "required" : true
                }, {
                    "name" : "body",
                    "in" : "body",
                    "description" : "new group",
                    "required" : true,
                    "schema" : {
                        "$ref" : "#/definitions/Group"
                    }
                } ],
                "responses" : {
                    "200" : {
                        "description" : "OK",
                        "schema" : {
                            "type" : "object",
                            "items" : {
                                "$ref" : "#/definitions/Group"
                            }
                        }
                    },
                    "400" : {
                        "description" : "Bad request"
                    },
                    "401" : {
                        "description" : "Unauthorized"
                    },
                    "403" : {
                        "description" : "Forbidden"
                    },
                    "404" : {
                        "description" : "Not Found"
                    },
                    "500" : {
                        "description" : "Internal Server Error"
                    }
                }
            }
        },
        "/group/{id}" : {
            "get" : {
                "tags" : [ "group" ],
                "summary" : "Get group",
                "description" : "Get group",
                "operationId" : "getGroup",
                "produces" : [ "application/json" ],
                "parameters" : [ {
                    "in" : "header",
                    "name" : "Authorization",
                    "type" : "string",
                    "required" : true
                }, {
                    "name" : "id",
                    "in" : "path",
                    "description" : "Group id",
                    "required" : true,
                    "type" : "string"
                } ],
                "responses" : {
                    "200" : {
                        "description" : "OK",
                        "schema" : {
                            "type" : "object",
                            "items" : {
                                "$ref" : "#/definitions/Group"
                            }
                        }
                    },
                    "400" : {
                        "description" : "Bad request"
                    },
                    "401" : {
                        "description" : "Unauthorized"
                    },
                    "403" : {
                        "description" : "Forbidden"
                    },
                    "404" : {
                        "description" : "Not Found"
                    },
                    "500" : {
                        "description" : "Internal Server Error"
                    }
                }
            },
            "put" : {
                "tags" : [ "group" ],
                "summary" : "Update group",
                "description" : "Update group",
                "operationId" : "UpdateGroup",
                "produces" : [ "application/json" ],
                "parameters" : [ {
                    "name" : "id",
                    "in" : "path",
                    "description" : "Group id",
                    "required" : true,
                    "type" : "string"
                }, {
                    "in" : "header",
                    "name" : "Authorization",
                    "type" : "string",
                    "required" : true
                }, {
                    "name" : "body",
                    "in" : "body",
                    "description" : "update group",
                    "required" : true,
                    "schema" : {
                        "$ref" : "#/definitions/Group"
                    }
                } ],
                "responses" : {
                    "200" : {
                        "description" : "OK",
                        "schema" : {
                            "$ref" : "#/definitions/Group"
                        }
                    },
                    "400" : {
                        "description" : "Bad request"
                    },
                    "401" : {
                        "description" : "Unauthorized"
                    },
                    "403" : {
                        "description" : "Forbidden"
                    },
                    "404" : {
                        "description" : "Not Found"
                    },
                    "500" : {
                        "description" : "Internal Server Error"
                    }
                }
            },
            "delete" : {
                "tags" : [ "group" ],
                "summary" : "Delete group",
                "description" : "Delete group",
                "operationId" : "DeleteGroup",
                "produces" : [ "application/json" ],
                "parameters" : [ {
                    "name" : "id",
                    "in" : "path",
                    "description" : "Group id",
                    "required" : true,
                    "type" : "string"
                }, {
                    "in" : "header",
                    "name" : "Authorization",
                    "type" : "string",
                    "required" : true
                } ],
                "responses" : {
                    "200" : {
                        "description" : "OK"
                    },
                    "400" : {
                        "description" : "Bad request"
                    },
                    "401" : {
                        "description" : "Unauthorized"
                    },
                    "403" : {
                        "description" : "Forbidden"
                    },
                    "404" : {
                        "description" : "Not Found"
                    },
                    "500" : {
                        "description" : "Internal Server Error"
                    }
                }
            }
        }
    },
    "definitions" : {
        "User" : {
            "type" : "object",
            "properties" : {
                "login" : {
                    "type" : "string"
                },
                "password" : {
                    "type" : "string"
                },
                "age" : {
                    "type" : "number"
                },
                "isDeleted" : {
                    "type" : "boolean"
                }
            }
        },
        "Group" : {
            "type" : "object",
            "properties" : {
                "name" : {
                    "type" : "string"
                },
                "permission" : {
                    "type" : "array",
                    "items": {
                        "type": "string",
                        "enum" : [ "READ", "WRITE", "DELETE", "SHARE", "UPLOAD_FILES" ]
                    }
                }
            }
        }
    }
};
