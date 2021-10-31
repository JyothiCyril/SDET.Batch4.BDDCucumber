$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Devlabs/Batch 4/SDETTraining/SDET.Batch4.BDDCucumber/src/test/java/com/qa/features/AmazonFeatures.feature");
formatter.feature({
  "line": 1,
  "name": "Validate the amazon application",
  "description": "",
  "id": "validate-the-amazon-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 40,
  "name": "Validate search item for multiple items",
  "description": "",
  "id": "validate-the-amazon-application;validate-search-item-for-multiple-items",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 39,
      "name": "@MultipleInputTesting"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "the user is on amazon home page",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the user selects the \"\u003cCategory\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "the user type the \"\u003cItemName\u003e\" in the search text field",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "clicks the maginifier button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "check all the relavant items loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "validate-the-amazon-application;validate-search-item-for-multiple-items;",
  "rows": [
    {
      "cells": [
        "Category",
        "ItemName"
      ],
      "line": 49,
      "id": "validate-the-amazon-application;validate-search-item-for-multiple-items;;1"
    },
    {
      "cells": [
        "Books",
        "Da vinci code"
      ],
      "line": 50,
      "id": "validate-the-amazon-application;validate-search-item-for-multiple-items;;2"
    },
    {
      "cells": [
        "Appliances",
        "Washing machines"
      ],
      "line": 51,
      "id": "validate-the-amazon-application;validate-search-item-for-multiple-items;;3"
    },
    {
      "cells": [
        "Electronics",
        "Mobile phones"
      ],
      "line": 52,
      "id": "validate-the-amazon-application;validate-search-item-for-multiple-items;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 537400,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Initilize the browser instance",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Browser is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Url should be launched",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.browser_is_opened()"
});
formatter.result({
  "duration": 15258297400,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.url_should_be_launched()"
});
formatter.result({
  "duration": 4439575600,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Validate search item for multiple items",
  "description": "",
  "id": "validate-the-amazon-application;validate-search-item-for-multiple-items;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 39,
      "name": "@MultipleInputTesting"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "the user is on amazon home page",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the user selects the \"Books\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "the user type the \"Da vinci code\" in the search text field",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "clicks the maginifier button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "check all the relavant items loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.the_user_is_on_amazon_home_page()"
});
formatter.result({
  "duration": 610340400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 22
    }
  ],
  "location": "AmazonStepDefinition.the_user_selects_the(String)"
});
formatter.result({
  "duration": 7271465600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Da vinci code",
      "offset": 19
    }
  ],
  "location": "AmazonStepDefinition.the_user_type_the_in_the_search_text_field(String)"
});
formatter.result({
  "duration": 709543700,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.clicks_the_maginifier_button()"
});
formatter.result({
  "duration": 5924854400,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.check_all_the_relavant_items_loaded()"
});
formatter.result({
  "duration": 3985391600,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 6368210700,
  "status": "passed"
});
formatter.after({
  "duration": 155600,
  "status": "passed"
});
formatter.before({
  "duration": 279700,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Initilize the browser instance",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Browser is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Url should be launched",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.browser_is_opened()"
});
formatter.result({
  "duration": 4377272300,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.url_should_be_launched()"
});
formatter.result({
  "duration": 3801658700,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Validate search item for multiple items",
  "description": "",
  "id": "validate-the-amazon-application;validate-search-item-for-multiple-items;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 39,
      "name": "@MultipleInputTesting"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "the user is on amazon home page",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the user selects the \"Appliances\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "the user type the \"Washing machines\" in the search text field",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "clicks the maginifier button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "check all the relavant items loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.the_user_is_on_amazon_home_page()"
});
formatter.result({
  "duration": 566575700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Appliances",
      "offset": 22
    }
  ],
  "location": "AmazonStepDefinition.the_user_selects_the(String)"
});
formatter.result({
  "duration": 4317076900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Washing machines",
      "offset": 19
    }
  ],
  "location": "AmazonStepDefinition.the_user_type_the_in_the_search_text_field(String)"
});
formatter.result({
  "duration": 381244600,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.clicks_the_maginifier_button()"
});
formatter.result({
  "duration": 4353678700,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.check_all_the_relavant_items_loaded()"
});
formatter.result({
  "duration": 2921016500,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1370779500,
  "status": "passed"
});
formatter.after({
  "duration": 947800,
  "status": "passed"
});
formatter.before({
  "duration": 792400,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Initilize the browser instance",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Browser is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Url should be launched",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.browser_is_opened()"
});
formatter.result({
  "duration": 3017819700,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.url_should_be_launched()"
});
formatter.result({
  "duration": 4999719600,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Validate search item for multiple items",
  "description": "",
  "id": "validate-the-amazon-application;validate-search-item-for-multiple-items;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 39,
      "name": "@MultipleInputTesting"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "the user is on amazon home page",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the user selects the \"Electronics\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "the user type the \"Mobile phones\" in the search text field",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "clicks the maginifier button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "check all the relavant items loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.the_user_is_on_amazon_home_page()"
});
formatter.result({
  "duration": 296494100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 22
    }
  ],
  "location": "AmazonStepDefinition.the_user_selects_the(String)"
});
formatter.result({
  "duration": 4173423400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile phones",
      "offset": 19
    }
  ],
  "location": "AmazonStepDefinition.the_user_type_the_in_the_search_text_field(String)"
});
formatter.result({
  "duration": 562409100,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.clicks_the_maginifier_button()"
});
formatter.result({
  "duration": 6261874600,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.check_all_the_relavant_items_loaded()"
});
formatter.result({
  "duration": 2797837100,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2240784900,
  "status": "passed"
});
formatter.after({
  "duration": 170200,
  "status": "passed"
});
});