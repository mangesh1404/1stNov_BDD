$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "JBK offline WebSite",
  "description": "",
  "id": "jbk-offline-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-website;login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user verify homepage title",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "jbk-offline-website;login-test;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "jbk-offline-website;login-test;;1"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456"
      ],
      "line": 16,
      "id": "jbk-offline-website;login-test;;2"
    },
    {
      "cells": [
        "mangesh@gmail.com",
        "147852"
      ],
      "line": 17,
      "id": "jbk-offline-website;login-test;;3"
    },
    {
      "cells": [
        "neelam@gmail.com",
        "12563"
      ],
      "line": 18,
      "id": "jbk-offline-website;login-test;;4"
    },
    {
      "cells": [
        "Ashwini@gmail.com",
        "159687"
      ],
      "line": 19,
      "id": "jbk-offline-website;login-test;;5"
    },
    {
      "cells": [
        "jbk@gmail.com",
        "15236"
      ],
      "line": 20,
      "id": "jbk-offline-website;login-test;;6"
    },
    {
      "cells": [
        "!@#$%^",
        "asdfghj"
      ],
      "line": 21,
      "id": "jbk-offline-website;login-test;;7"
    },
    {
      "cells": [
        "erythj",
        "!@##$$^^"
      ],
      "line": 22,
      "id": "jbk-offline-website;login-test;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_launch_application()"
});
formatter.result({
  "duration": 15417733700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-website;login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enters \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user verify homepage title",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 35
    }
  ],
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1565306399,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_click_on_login_button()"
});
formatter.result({
  "duration": 30875127001,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_verify_homepage_title()"
});
formatter.result({
  "duration": 32172000,
  "status": "passed"
});
formatter.after({
  "duration": 2207824701,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_launch_application()"
});
formatter.result({
  "duration": 7932312300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-website;login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enters \"mangesh@gmail.com\" and \"147852\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user verify homepage title",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mangesh@gmail.com",
      "offset": 13
    },
    {
      "val": "147852",
      "offset": 37
    }
  ],
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 691688700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_click_on_login_button()"
});
formatter.result({
  "duration": 159590300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_verify_homepage_title()"
});
formatter.result({
  "duration": 62947201,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Log in]\u003e but was:\u003cJavaByKiran | [Dashboard]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdefs.LoginStepDef.user_verify_homepage_title(LoginStepDef.java:46)\r\n\tat ✽.Then user verify homepage title(login.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2290342300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_launch_application()"
});
formatter.result({
  "duration": 9807595400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-website;login-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enters \"neelam@gmail.com\" and \"12563\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user verify homepage title",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "neelam@gmail.com",
      "offset": 13
    },
    {
      "val": "12563",
      "offset": 36
    }
  ],
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 664407801,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_click_on_login_button()"
});
formatter.result({
  "duration": 315707599,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_verify_homepage_title()"
});
formatter.result({
  "duration": 75206100,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Log in]\u003e but was:\u003cJavaByKiran | [Dashboard]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdefs.LoginStepDef.user_verify_homepage_title(LoginStepDef.java:46)\r\n\tat ✽.Then user verify homepage title(login.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2296240199,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_launch_application()"
});
formatter.result({
  "duration": 9947654200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-website;login-test;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enters \"Ashwini@gmail.com\" and \"159687\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user verify homepage title",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ashwini@gmail.com",
      "offset": 13
    },
    {
      "val": "159687",
      "offset": 37
    }
  ],
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 554137500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_click_on_login_button()"
});
formatter.result({
  "duration": 184920200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_verify_homepage_title()"
});
formatter.result({
  "duration": 47647000,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Log in]\u003e but was:\u003cJavaByKiran | [Dashboard]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdefs.LoginStepDef.user_verify_homepage_title(LoginStepDef.java:46)\r\n\tat ✽.Then user verify homepage title(login.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 498477400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_launch_application()"
});
formatter.result({
  "duration": 5957292699,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-website;login-test;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enters \"jbk@gmail.com\" and \"15236\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user verify homepage title",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "jbk@gmail.com",
      "offset": 13
    },
    {
      "val": "15236",
      "offset": 33
    }
  ],
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 490696301,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_click_on_login_button()"
});
formatter.result({
  "duration": 139689699,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_verify_homepage_title()"
});
formatter.result({
  "duration": 24196099,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Log in]\u003e but was:\u003cJavaByKiran | [Dashboard]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdefs.LoginStepDef.user_verify_homepage_title(LoginStepDef.java:46)\r\n\tat ✽.Then user verify homepage title(login.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2319810600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_launch_application()"
});
formatter.result({
  "duration": 9630516900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-website;login-test;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enters \"!@#$%^\" and \"asdfghj\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user verify homepage title",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "!@#$%^",
      "offset": 13
    },
    {
      "val": "asdfghj",
      "offset": 26
    }
  ],
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 531523901,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_click_on_login_button()"
});
formatter.result({
  "duration": 259034000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_verify_homepage_title()"
});
formatter.result({
  "duration": 41254000,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Log in]\u003e but was:\u003cJavaByKiran | [Dashboard]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdefs.LoginStepDef.user_verify_homepage_title(LoginStepDef.java:46)\r\n\tat ✽.Then user verify homepage title(login.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2296415600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_launch_application()"
});
formatter.result({
  "duration": 8301409099,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-website;login-test;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user enters \"erythj\" and \"!@##$$^^\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user verify homepage title",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "erythj",
      "offset": 13
    },
    {
      "val": "!@##$$^^",
      "offset": 26
    }
  ],
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 697299600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_click_on_login_button()"
});
formatter.result({
  "duration": 188511200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_verify_homepage_title()"
});
formatter.result({
  "duration": 39066201,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Log in]\u003e but was:\u003cJavaByKiran | [Dashboard]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdefs.LoginStepDef.user_verify_homepage_title(LoginStepDef.java:46)\r\n\tat ✽.Then user verify homepage title(login.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2683530200,
  "status": "passed"
});
});