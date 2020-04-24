/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/create-project-card.js":
/*!************************************!*\
  !*** ./src/create-project-card.js ***!
  \************************************/
/*! exports provided: createProjectCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProjectCard\", function() { return createProjectCard; });\n/* harmony import */ var _project_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-list */ \"./src/project-list.js\");\n/* harmony import */ var _task_page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-page-load */ \"./src/task-page-load.js\");\n/* harmony import */ var _delete_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-project */ \"./src/delete-project.js\");\n\n\n\n\nconst createProjectCard = (listIndex) => {\n    const mainProjectsNode = document.getElementById('projects-main');\n    const projectCardContainer = document.getElementById('project-card-container');\n    let projectList = Object(_project_list__WEBPACK_IMPORTED_MODULE_0__[\"retrieveProjectListLS\"])();\n    \n    let projectCard = document.createElement('div');\n    projectCard.setAttribute('class', 'project-cards');\n    projectCard.setAttribute('data-id', listIndex);\n    projectCard.addEventListener('click', function() {\n        if (event.target.getAttribute('class') === 'project-card-del-btn') \n            Object(_delete_project__WEBPACK_IMPORTED_MODULE_2__[\"deleteProject\"])();\n        else\n            Object(_task_page_load__WEBPACK_IMPORTED_MODULE_1__[\"loadTaskPage\"])();\n    });\n\n    let projectCardName = document.createElement('div');\n    projectCardName.setAttribute('class', 'project-name');\n    projectCardName.innerText = projectList[listIndex].name;\n    projectCard.appendChild(projectCardName);\n\n    let projectCardDeleteBtn = document.createElement('button');\n    projectCardDeleteBtn.setAttribute('class', 'project-card-del-btn');\n    projectCardDeleteBtn.innerText = 'Delete';\n    projectCard.appendChild(projectCardDeleteBtn);\n\n    projectCardContainer.appendChild(projectCard);\n    mainProjectsNode.appendChild(projectCardContainer);\n}\n\n\n\n//# sourceURL=webpack:///./src/create-project-card.js?");

/***/ }),

/***/ "./src/delete-project.js":
/*!*******************************!*\
  !*** ./src/delete-project.js ***!
  \*******************************/
/*! exports provided: deleteProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProject\", function() { return deleteProject; });\n/* harmony import */ var _project_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-list */ \"./src/project-list.js\");\n/* harmony import */ var _projects_card_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-card-load */ \"./src/projects-card-load.js\");\n\n\n\nconst deleteProject = () => {\n    let projectList = Object(_project_list__WEBPACK_IMPORTED_MODULE_0__[\"retrieveProjectListLS\"])();\n    let projectIndex = event.target.parentNode.getAttribute('data-id');\n\n    if (confirm(\"Delete \" + projectList[projectIndex].name + \"?\")) {\n        projectList.splice(projectIndex, 1);\n        Object(_project_list__WEBPACK_IMPORTED_MODULE_0__[\"updateProjectListLS\"])(projectList);\n        Object(_projects_card_load__WEBPACK_IMPORTED_MODULE_1__[\"loadProjectCards\"])();\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/delete-project.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-page-load */ \"./src/projects-page-load.js\");\n\n\nObject(_projects_page_load__WEBPACK_IMPORTED_MODULE_0__[\"loadProjectPage\"])();\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project-add-to-list.js":
/*!************************************!*\
  !*** ./src/project-add-to-list.js ***!
  \************************************/
/*! exports provided: addProjectToList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProjectToList\", function() { return addProjectToList; });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _project_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-list */ \"./src/project-list.js\");\n/* harmony import */ var _projects_card_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-card-load */ \"./src/projects-card-load.js\");\n\n\n\n\n// creates new project object and pushes to list\nconst addProjectToList = (titleInput) => {\n    var newProj = new _projects__WEBPACK_IMPORTED_MODULE_0__[\"Project\"](titleInput.value);\n    let projectList = Object(_project_list__WEBPACK_IMPORTED_MODULE_1__[\"retrieveProjectListLS\"])();\n    projectList.push(newProj);\n    Object(_project_list__WEBPACK_IMPORTED_MODULE_1__[\"updateProjectListLS\"])(projectList);\n    Object(_projects_card_load__WEBPACK_IMPORTED_MODULE_2__[\"loadProjectCards\"])();\n}\n\n\n\n//# sourceURL=webpack:///./src/project-add-to-list.js?");

/***/ }),

/***/ "./src/project-list.js":
/*!*****************************!*\
  !*** ./src/project-list.js ***!
  \*****************************/
/*! exports provided: updateProjectListLS, retrieveProjectListLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateProjectListLS\", function() { return updateProjectListLS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"retrieveProjectListLS\", function() { return retrieveProjectListLS; });\nconst updateProjectListLS = (projectList) => {\n    localStorage.setItem('projectList', JSON.stringify(projectList));\n};\n\nconst retrieveProjectListLS = () => {\n    if (JSON.parse(localStorage.getItem('projectList')) == null) {\n        var projectList = [];\n        return projectList;\n    }\n    else\n        return JSON.parse(localStorage.getItem('projectList'));\n};\n\n\n\n//# sourceURL=webpack:///./src/project-list.js?");

/***/ }),

/***/ "./src/project-modal.js":
/*!******************************!*\
  !*** ./src/project-modal.js ***!
  \******************************/
/*! exports provided: projectModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectModal\", function() { return projectModal; });\n/* harmony import */ var _project_add_to_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-add-to-list */ \"./src/project-add-to-list.js\");\n\n\n// modal to prompt user for data\nconst projectModal = () => {\n    const addProjBtn = document.getElementById('add-new-project');\n    let projModal = document.getElementById('project-modal');\n    let closeBtn = document.getElementsByClassName('close')[0];\n    let titleInput = document.getElementById('project-title');\n\n    titleInput.value = '';\n    projModal.style.display = 'block';\n\n    addProjBtn.onclick = () => {\n        projModal.style.display = 'none';\n        Object(_project_add_to_list__WEBPACK_IMPORTED_MODULE_0__[\"addProjectToList\"])(titleInput);\n        titleInput.value = '';\n    }\n\n    closeBtn.onclick = () => {\n        titleInput.value = '';\n        projModal.style.display = 'none';\n    }\n};\n\n\n\n//# sourceURL=webpack:///./src/project-modal.js?");

/***/ }),

/***/ "./src/projects-card-load.js":
/*!***********************************!*\
  !*** ./src/projects-card-load.js ***!
  \***********************************/
/*! exports provided: loadProjectCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadProjectCards\", function() { return loadProjectCards; });\n/* harmony import */ var _project_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-list */ \"./src/project-list.js\");\n/* harmony import */ var _create_project_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-project-card */ \"./src/create-project-card.js\");\n\n\n\n// renders list of projects into seperate 'cards'\nconst loadProjectCards = () => {\n    const projectCardContainer = document.getElementById('project-card-container');\n    let projectList = Object(_project_list__WEBPACK_IMPORTED_MODULE_0__[\"retrieveProjectListLS\"])();\n\n    // clear current display\n    while (projectCardContainer.firstChild) {\n        projectCardContainer.firstChild.remove();\n    }\n    \n    // create and append cards \n    for (let i = 0; i < projectList.length; i++) {\n        Object(_create_project_card__WEBPACK_IMPORTED_MODULE_1__[\"createProjectCard\"])(i);\n    }  \n}\n\n\n\n//# sourceURL=webpack:///./src/projects-card-load.js?");

/***/ }),

/***/ "./src/projects-page-load.js":
/*!***********************************!*\
  !*** ./src/projects-page-load.js ***!
  \***********************************/
/*! exports provided: loadProjectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadProjectPage\", function() { return loadProjectPage; });\n/* harmony import */ var _projects_card_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-card-load */ \"./src/projects-card-load.js\");\n/* harmony import */ var _project_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-modal */ \"./src/project-modal.js\");\n\n\n\n// renders main home page to display title and projects\nconst loadProjectPage = () => {\n    let pageTitle = document.createElement('h1');\n    pageTitle.innerText = 'ToDo List';\n\n    let projectsTitle = document.createElement('h2');\n    projectsTitle.innerText = 'Projects';\n\n    // loads modal to retrieve user input\n    let projectsAddButton = document.createElement('button');\n    projectsAddButton.setAttribute('class', 'add-btn');\n    projectsAddButton.setAttribute('id', 'projects-add-btn');\n    projectsAddButton.addEventListener('click', _project_modal__WEBPACK_IMPORTED_MODULE_1__[\"projectModal\"]);\n    projectsAddButton.innerText = '+';\n    \n    // append elements to main node\n    let projectsTitleContainer = document.createElement('div');\n    projectsTitleContainer.appendChild(projectsTitle);\n    projectsTitleContainer.appendChild(projectsAddButton);\n    projectsTitleContainer.setAttribute('id', 'projects-title');\n\n    let projectCardsContainer = document.createElement('div');\n    projectCardsContainer.setAttribute('id', 'project-card-container');\n\n    let projectsMainContainer = document.createElement('div');\n    projectsMainContainer.appendChild(pageTitle);\n    projectsMainContainer.appendChild(projectsTitleContainer);\n    projectsMainContainer.appendChild(projectCardsContainer);\n    projectsMainContainer.setAttribute('id', 'projects-main');\n\n    const mainNode = document.getElementById('main-content');\n    mainNode.appendChild(projectsMainContainer);\n\n    // render list of projects\n    Object(_projects_card_load__WEBPACK_IMPORTED_MODULE_0__[\"loadProjectCards\"])();\n}\n\n\n\n//# sourceURL=webpack:///./src/projects-page-load.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n// project object to store multiple tasks\nfunction Project (name, id) {\n    this.taskList = [];\n    this.name = name;\n    this.id = id;\n};\n\n\n\n//# sourceURL=webpack:///./src/projects.js?");

/***/ }),

/***/ "./src/task-page-load.js":
/*!*******************************!*\
  !*** ./src/task-page-load.js ***!
  \*******************************/
/*! exports provided: loadTaskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadTaskPage\", function() { return loadTaskPage; });\n// displays tasklist for project that was selected\nconst loadTaskPage = () => {\n    let projectIndex = event.target.getAttribute('data-id');\n\n    // clear page content\n    const mainContentContainer = document.getElementById('main-content');\n    while (mainContentContainer.firstChild) {\n        mainContentContainer.firstChild.remove();\n    }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/task-page-load.js?");

/***/ })

/******/ });