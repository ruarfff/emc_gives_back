angular.module("givesBack").run(["$templateCache", function($templateCache) {$templateCache.put("categories/templates/category.html","<ion-view view-title={{categoryCtrl.category.title}}><ion-nav-buttons side=right><a class=\"button settings-icon button-icon icon ion-ios-home\" ui-sref=dashboard ng-if=!locked></a> <a class=\"button settings-icon button-icon icon ion-ios-gear\" ng-click=categoryCtrl.showMenu()></a></ion-nav-buttons><ion-content ng-class=colour><div ng-if=\"!!categoryCtrl.howtos && categoryCtrl.howtos.length === 0\"><p>Looks like you don\'t have any How-Tos yet.</p><button class=\"button button-block button-calm\" ng-click=categoryCtrl.openEditor()>Create How-To</button></div><ion-spinner class=spinner-energized ng-if=!categoryCtrl.howtos></ion-spinner><div class=\"row cope-list\"><a class=\"col col-25 cope-col\" ng-repeat=\"howto in categoryCtrl.howtos\" href=#/howtos/{{howto.id}}><div class=cope-tile><h2 class=howto-title>{{howto.title}}</h2><img ng-src={{howto.image}}></div></a></div></ion-content></ion-view>");
$templateCache.put("categories/templates/create-new-category.html","<ion-modal-view><ion-header-bar><h1 class=title>Create New Category</h1></ion-header-bar><ion-content><form name=createCategoryForm novalidate ng-submit=createNewCategory(category)><div class=list><label class=\"item item-input\"><label class=modal-input-label>Title:</label> <input name=categoryTitle type=text ng-model=category.title placeholder=Title required></label><div class=error-container ng-show=createCategoryForm.categoryTitle.$error ng-messages=createCategoryForm.categoryTitle.$error><div class=info ng-message=required><i class=ion-information-circled></i> Category title is required</div></div><label class=\"item item-input\"><label class=modal-input-label>Cover Image:</label> <input name=categoryImage type=file placeholder=Image valid-file ng-model=categoryImageFileName onchange=angular.element(this).scope().setCategoryFiles(this) required accept=image/*></label><div class=\"error-container last-error-container\" ng-show=createCategoryForm.categoryImage.$error ng-messages=createCategoryForm.categoryImage.$error><div class=info ng-message=required><i class=ion-information-circled></i> Category cover image is required</div></div><button type=button class=\"button button-energized modal-form-button\" ng-click=cancelCreateCategory()>Cancel</button> <button ng-show=!categoryModalProcessing class=\"button icon-right ion-checkmark-round button-balanced modal-form-button\" ng-disabled=!createCategoryForm.$valid type=submit><b>Add Category</b></button><ion-spinner class=spinner-balanced ng-if=categoryModalProcessing></ion-spinner></div></form></ion-content></ion-modal-view>");
$templateCache.put("categories/templates/edit-categories.html","<ion-modal-view><ion-header-bar><h1 class=title>Edit Categories</h1></ion-header-bar><ion-content><ion-list show-delete=true><ion-item ng-repeat=\"category in categories\">{{category.title}}<ion-delete-button class=ion-minus-circled ng-click=removeCategory(category.id)></ion-delete-button></ion-item></ion-list><button class=\"button button-block button-calm\" ng-click=newCategory()>New Category</button> <button class=\"button button-block button-balanced\" ng-click=cancelEditCategories()>Done</button></ion-content></ion-modal-view>");
$templateCache.put("dashboard/templates/dashboard.html","<ion-view view-title=Dashboard><ion-nav-buttons side=right><a class=\"button settings-icon button-icon icon ion-ios-gear\" ng-click=dashboardCtrl.showMenu()></a></ion-nav-buttons><ion-content ng-class=colour class=padding><div ng-if=\"!!dashboardCtrl.categories && dashboardCtrl.categories.length === 0\"><p>Looks like you don\'t have any categories yet.</p><button class=\"button button-block button-calm\" ng-click=dashboardCtrl.openDashboardEditor()>Create Category</button></div><ion-spinner class=spinner-energized ng-if=!dashboardCtrl.categories></ion-spinner><div class=\"row cope-list\" ng-if=\"!!dashboardCtrl.categories && dashboardCtrl.categories.length > 0\"><a class=\"col col-25 cope-col\" ng-repeat=\"category in dashboardCtrl.categories\" href=#/categories/{{category.id}}><div class=cope-tile><h3 class=category-title>{{category.title}}</h3><img ng-src={{category.image}} alt={{category.title}}></div></a></div></ion-content></ion-view>");
$templateCache.put("howtos/templates/addhowto.html","<ion-modal-view><ion-header-bar><h1 class=title>Add How-To</h1></ion-header-bar><ion-content><form name=addHowtoForm novalidate ng-submit=addHowTo(howto)><div class=list><p style=\"text-align: center\">A How-to is a collection of tasks or steps that describe how to do something, it can be anything,ie. a how to brush your teeth, how to wash your hands etc.</p><label class=\"item item-input\"><label class=modal-input-label>Title:</label> <input name=howtoTitle type=text ng-model=howto.title placeholder=\"The title of your new how-to\" required></label><div class=error-container ng-show=addHowtoForm.howtoTitle.$error ng-messages=addHowtoForm.howtoTitle.$error><div class=info ng-message=required><i class=ion-information-circled></i> How-to title is required</div></div><label class=\"item item-input\"><label class=modal-input-label>Cover Image:</label> <input name=howtoImage type=file placeholder=Image id=howtoimage valid-file ng-model=howtoImageFileName onchange=angular.element(this).scope().setHowToFiles(this) required accept=image/*></label><div class=\"error-container last-error-container\" ng-show=addHowtoForm.howtoImage.$error ng-messages=addHowtoForm.howtoImage.$error><div class=info ng-message=required><i class=ion-information-circled></i> How-to cover image is required</div></div><label class=\"item item-input\"><label class=modal-input-label>Video Url:</label> <input type=text ng-model=howto.video placeholder=\"The video to embed for your new how-to (currently only YouTube videos are supported)\"></label> <button type=button class=\"button button-energized modal-form-button\" ng-click=cancelCreateHowTo()>Cancel</button> <button ng-show=!howtoModalProcessing class=\"button icon-right ion-checkmark-round button-balanced modal-form-button\" ng-disabled=!addHowtoForm.$valid type=submit><b>Create</b></button><ion-spinner class=spinner-balanceds ng-if=howtoModalProcessing></ion-spinner></div></form></ion-content></ion-modal-view>");
$templateCache.put("howtos/templates/howto.html","<ion-view view-title={{howToCtrl.howto.title}}><ion-nav-buttons side=right><a class=\"button settings-icon button-icon icon ion-ios-home\" ui-sref=dashboard ng-if=!locked></a> <a class=\"button settings-icon button-icon icon ion-ios-gear\" ng-click=howToCtrl.showMenu()></a></ion-nav-buttons><ion-content ng-class=colour><div class=\"row cope-list\"><span class=\"col col-25 cope-col\" ng-repeat=\"task in howto.tasks\" onclick=\"this.querySelector(\'audio\').play()\"><div class=cope-tile><p class=task-title>{{task.name}}</p><div class=task-desc-box><p>{{task.description}}</p></div><img ng-src={{task.image}}><audio ng-if=task.audio preload><source ng-src=\"{{task.audio | trusted}}\"></audio></div></span></div><div ng-if=howToCtrl.hasVideo class=tasks-video><iframe ng-if=howToCtrl.externalVideo width=420 height=315 ng-src={{howToCtrl.videoUrl}} frameborder=0 allowfullscreen></iframe><video ng-if=!howToCtrl.externalVideo width=420 height=315 controls ng-src={{howToCtrl.videoUrl}}></video></div></ion-content></ion-view>");
$templateCache.put("settings/templates/colorPicker.html","<ion-modal-view class=colour-picker><ion-header-bar><h1 class=title>Pick your favourite colour</h1></ion-header-bar><ion-content><div class=colour ng-class=col ng-repeat=\"col in colours\" ng-click=setColour(col)>&nbsp;</div></ion-content></ion-modal-view>");
$templateCache.put("settings/templates/editPin.html","<ion-modal-view class=edit-pin-view><ion-header-bar><h1 class=title>Edit Mode</h1></ion-header-bar><ion-content class=padding><form name=editPinForm novalidate ng-submit=editPinSubmit()><p>Please enter your pin: <input type=text class=edit-pin-input name=editPinInput value ng-model=pin ng-trim=false required><div class=\"error-container last-error-container\" ng-show=\"!validPin && editPinForm.$submitted\"><div class=error><i class=ion-information-circled></i> Pin incorrect please try again!</div></div><button type=submit class=\"button edit-pin-submit-button\" ng-disabled=!editPinForm.editPinInput.$valid>Submit</button> <button type=button class=\"button button-energized\" ng-click=cancelPin()>Cancel</button></p></form></ion-content></ion-modal-view>");
$templateCache.put("users/templates/login.html","<ion-view view-title=Login name=login-view><ion-content class=padding><form name=loginForm novalidate ng-submit=loginCtrl.login(user)><div class=\"list list-inset\"><label class=\"item item-input\" ng-class=\"{ \'has-errors\' : loginForm.username.$touched && loginForm.username.$invalid, \'no-errors\' : loginForm.username.$valid}\"><input type=text name=username placeholder=Username ng-model=user.username required autofocus></label><div class=error-container ng-show=\"loginForm.username.$touched && loginForm.username.$error\" ng-messages=loginForm.username.$error><div ng-messages-include=login-error-list.html></div></div><label class=\"item item-input\" ng-class=\"{ \'has-errors\' : loginForm.password.$invalid && loginForm.$submitted, \'no-errors\' : loginForm.password.$valid && loginForm.$submitted}\"><input type=password name=password placeholder=Password ng-model=user.password required></label><div class=\"error-container last-error-container\" ng-show=\"loginForm.password.$error && loginForm.$submitted\" ng-messages=loginForm.password.$error><div ng-messages-include=login-error-list.html></div></div></div><button class=\"button button-block button-positive\" type=submit ng-disabled=!loginForm.$valid>Login</button> <a ui-sref=signup class=\"button button-block button-calm\">Signup</a></form><script id=login-error-list.html type=text/ng-template><div class=\"error\" ng-message=\"required\"> <i class=\"ion-information-circled\"></i> This field is required </div></script></ion-content></ion-view>");
    $templateCache.put("users/templates/signup.html", "<ion-view view-title=Signup name=signup-view><ion-content class=padding><form name=signupForm novalidate ng-submit=signupCtrl.signup(user)><div class=\"list list-inset\"><label class=\"item item-input\" ng-class=\"{ \'has-errors\' : signupForm.username.$touched && signupForm.username.$invalid, \'no-errors\' : signupForm.username.$valid}\"><input name=username type=text placeholder=Username ng-model=user.username ng-minlength=2 ng-maxlength=40 required autofocus></label><div class=error-container ng-show=\"signupForm.username.$touched && signupForm.username.$error\" ng-messages=signupForm.username.$error><div ng-messages-include=signup-error-list.html></div></div><label class=\"item item-input\"><input type=password name=password placeholder=Password ng-model=user.password ng-minlength=5 ng-maxlength=100 required></label><div class=error-container ng-show=\"signupForm.password.$touched && signupForm.password.$error\" ng-messages=signupForm.password.$error><div ng-messages-include=signup-error-list.html></div></div><label class=\"item item-input\"><input type=password name=confirmPassword placeholder=\"Confirm Password\" ng-model=user.confirmPassword required compare-to=user.password></label><div class=\"error-container last-error-container\" ng-show=\"signupForm.confirmPassword.$touched && signupForm.confirmPassword.$error\" ng-messages=signupForm.confirmPassword.$error><div ng-messages-include=signup-error-list.html></div></div></div><button class=\"button button-block button-positive\" type=submit ng-disabled=!signupForm.$valid>Signup</button> <a ui-sref=login class=\"button button-block button-calm\">Login</a></form><script id=signup-error-list.html type=text/ng-template><div class=\"error\" ng-message=\"required\"> <i class=\"ion-information-circled\"></i> This field is required </div> <div class=\"error\" ng-message=\"minlength\"> <i class=\"ion-information-circled\"></i> Minimum length of this field is 5 characters </div> <div class=\"error\" ng-message=\"maxlength\"> <i class=\"ion-information-circled\"></i> Maximum length of this field is 20 characters </div> <div class=\"error\" ng-message=\"compareTo\"> <i class=\"ion-information-circled\"></i> Passwords do not match </div></script></ion-content></ion-view>");
    $templateCache.put("tasks/templates/addTask.html", "<ion-modal-view><ion-header-bar><h1 class=title>Add Task</h1></ion-header-bar><ion-content><form name=addTaskForm novalidate ng-submit=addTask(task)><div class=list><p style=\"text-align: center\">Add a task for your how to, tasks are the steps which form the how to ie. a how to brush your teeth one task would be get your toothbrush</p><label class=\"item item-input\"><label class=modal-input-label>Task Name:</label> <input name=taskName type=text ng-model=task.name placeholder=\"Task Name\" required></label><div class=error-container ng-show=addTaskForm.taskName.$error ng-messages=addTaskForm.taskName.$error><div class=info ng-message=required><i class=ion-information-circled></i> Task name is required</div></div><label class=\"item item-input\"><label class=modal-input-label>Task Description:</label> <input name=taskDescription type=text ng-model=task.description placeholder=\"Task Description\"></label> <label class=\"item item-input\"><label class=modal-input-label>Task Image:</label> <input name=taskImage type=file placeholder=Image id=taskimage valid-file ng-model=taskImageFileName onchange=angular.element(this).scope().setTaskFiles(this) required accept=image/*></label><div class=\"error-container last-error-container\" ng-show=addTaskForm.taskImage.$error ng-messages=addTaskForm.taskImage.$error><div class=info ng-message=required><i class=ion-information-circled></i> Task image is required</div></div><label class=\"item item-input\"><label class=modal-input-label>Task Audio:</label> <input name=taskAudio type=file placeholder=Audio id=taskAudio onchange=angular.element(this).scope().setTaskAudio(this) accept=audio/*></label> <button type=button class=\"button button-energized modal-form-button\" ng-click=cancelCreateTask()>Cancel</button> <button ng-show=!taskModalProcessing class=\"button icon-right ion-checkmark-round button-balanced modal-form-button\" ng-disabled=!addTaskForm.$valid type=submit><b>Create</b></button><ion-spinner class=spinner-balances ng-if=taskModalProcessing></ion-spinner></div></form></ion-content></ion-modal-view>");
    $templateCache.put("tasks/templates/task.html", "<ion-view view-title=Task><ion-content ng-class=colour></ion-content></ion-view>");
}]);