<div>

    <!DOCTYPE html>
    <html lang="en" class="light-style layout-navbar-fixed layout-menu-fixed " dir="ltr"
        data-theme="theme-default" data-assets-path="admin/" data-template="vertical-menu-template">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com/">
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap"
            rel="stylesheet">

        <!-- Icons -->
        <link rel="stylesheet" href="admin/vendor/fonts/boxicons.css" />
        <link rel="stylesheet" href="admin/vendor/fonts/fontawesome.css" />
        <link rel="stylesheet" href="admin/vendor/fonts/flag-icons.css" />
        <!-- Core CSS -->
        <link rel="stylesheet" href="admin/vendor/css/rtl/core.css" class="template-customizer-core-css" />
        <link rel="stylesheet" href="admin/vendor/css/rtl/theme-default.css" class="template-customizer-theme-css" />
        <link rel="stylesheet" href="admin/css/demo.css" />

        <!-- Vendors CSS -->
        <link rel="stylesheet" href="admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
        <link rel="stylesheet" href="admin/vendor/libs/typeahead-js/typeahead.css" />
        <link rel="stylesheet" href="admin/vendor/libs/quill/katex.css" />
        <link rel="stylesheet" href="admin/vendor/libs/quill/editor.css" />
        <link rel="stylesheet" href="admin/vendor/libs/select2/select2.css" />
        <!-- Page CSS -->
        <link rel="stylesheet" href="admin/vendor/css/pages/app-email.css" />
        <!-- Helpers -->
        <script src="admin/vendor/js/helpers.js"></script>
        <script src="admin/js/config.js"></script>
    </head>

    <!-- Layout container -->
    <div class="layout-page">
        <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar">
            <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0   d-xl-none ">
                <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                    <i class="bx bx-menu bx-sm"></i>
                </a>
            </div>


            <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">


                <!-- Search -->
                <div class="navbar-nav align-items-center">
                    <div class="nav-item navbar-search-wrapper mb-0">
                        <a class="nav-item nav-link search-toggler px-0" href="javascript:void(0);">
                            <i class="bx bx-search bx-sm"></i>
                            <span class="d-none d-md-inline-block text-muted">Search (Ctrl+/)</span>
                        </a>
                    </div>
                </div>
                <!-- /Search -->





                <ul class="navbar-nav flex-row align-items-center ms-auto">

                    <!-- Language -->
                    <li class="nav-item dropdown-language dropdown me-2 me-xl-0">
                        <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);"
                            data-bs-toggle="dropdown">
                            <i class='fi fi-us fis rounded-circle fs-3 me-1'></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <a class="dropdown-item" href="javascript:void(0);" data-language="en">
                                    <i class="fi fi-us fis rounded-circle fs-4 me-1"></i>
                                    <span class="align-middle">English</span>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="javascript:void(0);" data-language="fr">
                                    <i class="fi fi-fr fis rounded-circle fs-4 me-1"></i>
                                    <span class="align-middle">France</span>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="javascript:void(0);" data-language="de">
                                    <i class="fi fi-de fis rounded-circle fs-4 me-1"></i>
                                    <span class="align-middle">German</span>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="javascript:void(0);" data-language="pt">
                                    <i class="fi fi-pt fis rounded-circle fs-4 me-1"></i>
                                    <span class="align-middle">Portuguese</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!--/ Language -->




                    <!-- Style Switcher -->
                    <li class="nav-item me-2 me-xl-0">
                        <a class="nav-link style-switcher-toggle hide-arrow" href="javascript:void(0);">
                            <i class='bx bx-sm'></i>
                        </a>
                    </li>
                    <!--/ Style Switcher -->

                    <!-- Quick links  -->
                    <li class="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                        <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);"
                            data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <i class='bx bx-grid-alt bx-sm'></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end py-0">
                            <div class="dropdown-menu-header border-bottom">
                                <div class="dropdown-header d-flex align-items-center py-3">
                                    <h5 class="text-body mb-0 me-auto">Shortcuts</h5>
                                    <a href="javascript:void(0)" class="dropdown-shortcuts-add text-body"
                                        data-bs-toggle="tooltip" data-bs-placement="top" title="Add shortcuts"><i
                                            class="bx bx-sm bx-plus-circle"></i></a>
                                </div>
                            </div>
                            <div class="dropdown-shortcuts-list scrollable-container">
                                <div class="row row-bordered overflow-visible g-0">
                                    <div class="dropdown-shortcuts-item col">
                                        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                            <i class="bx bx-calendar fs-4"></i>
                                        </span>
                                        <a href="app-calendar.html" class="stretched-link">Calendar</a>
                                        <small class="text-muted mb-0">Appointments</small>
                                    </div>
                                    <div class="dropdown-shortcuts-item col">
                                        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                            <i class="bx bx-food-menu fs-4"></i>
                                        </span>
                                        <a href="app-invoice-list.html" class="stretched-link">Invoice App</a>
                                        <small class="text-muted mb-0">Manage Accounts</small>
                                    </div>
                                </div>
                                <div class="row row-bordered overflow-visible g-0">
                                    <div class="dropdown-shortcuts-item col">
                                        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                            <i class="bx bx-user fs-4"></i>
                                        </span>
                                        <a href="app-user-list.html" class="stretched-link">User App</a>
                                        <small class="text-muted mb-0">Manage Users</small>
                                    </div>
                                    <div class="dropdown-shortcuts-item col">
                                        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                            <i class="bx bx-check-shield fs-4"></i>
                                        </span>
                                        <a href="app-access-roles.html" class="stretched-link">Role Management</a>
                                        <small class="text-muted mb-0">Permission</small>
                                    </div>
                                </div>
                                <div class="row row-bordered overflow-visible g-0">
                                    <div class="dropdown-shortcuts-item col">
                                        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                            <i class="bx bx-pie-chart-alt-2 fs-4"></i>
                                        </span>
                                        <a href="index.html" class="stretched-link">Dashboard</a>
                                        <small class="text-muted mb-0">User Profile</small>
                                    </div>
                                    <div class="dropdown-shortcuts-item col">
                                        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                            <i class="bx bx-cog fs-4"></i>
                                        </span>
                                        <a href="pages-account-settings-account.html"
                                            class="stretched-link">Setting</a>
                                        <small class="text-muted mb-0">Account Settings</small>
                                    </div>
                                </div>
                                <div class="row row-bordered overflow-visible g-0">
                                    <div class="dropdown-shortcuts-item col">
                                        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                            <i class="bx bx-help-circle fs-4"></i>
                                        </span>
                                        <a href="pages-help-center-landing.html" class="stretched-link">Help
                                            Center</a>
                                        <small class="text-muted mb-0">FAQs & Articles</small>
                                    </div>
                                    <div class="dropdown-shortcuts-item col">
                                        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                            <i class="bx bx-window-open fs-4"></i>
                                        </span>
                                        <a href="modal-examples.html" class="stretched-link">Modals</a>
                                        <small class="text-muted mb-0">Useful Popups</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- Quick links -->

                    <!-- Notification -->
                    <li class="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
                        <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);"
                            data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <i class="bx bx-bell bx-sm"></i>
                            <span class="badge bg-danger rounded-pill badge-notifications">5</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end py-0">
                            <li class="dropdown-menu-header border-bottom">
                                <div class="dropdown-header d-flex align-items-center py-3">
                                    <h5 class="text-body mb-0 me-auto">Notification</h5>
                                    <a href="javascript:void(0)" class="dropdown-notifications-all text-body"
                                        data-bs-toggle="tooltip" data-bs-placement="top" title="Mark all as read"><i
                                            class="bx fs-4 bx-envelope-open"></i></a>
                                </div>
                            </li>
                            <li class="dropdown-notifications-list scrollable-container">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item list-group-item-action dropdown-notifications-item">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 me-3">
                                                <div class="avatar">
                                                    <img src="../../assets/img/avatars/1.png" alt
                                                        class="w-px-40 h-auto rounded-circle">
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-1">Congratulation Lettie ????</h6>
                                                <p class="mb-0">Won the monthly best seller gold badge</p>
                                                <small class="text-muted">1h ago</small>
                                            </div>
                                            <div class="flex-shrink-0 dropdown-notifications-actions">
                                                <a href="javascript:void(0)" class="dropdown-notifications-read"><span
                                                        class="badge badge-dot"></span></a>
                                                <a href="javascript:void(0)"
                                                    class="dropdown-notifications-archive"><span
                                                        class="bx bx-x"></span></a>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item list-group-item-action dropdown-notifications-item">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 me-3">
                                                <div class="avatar">
                                                    <span
                                                        class="avatar-initial rounded-circle bg-label-danger">CF</span>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-1">Charles Franklin</h6>
                                                <p class="mb-0">Accepted your connection</p>
                                                <small class="text-muted">12hr ago</small>
                                            </div>
                                            <div class="flex-shrink-0 dropdown-notifications-actions">
                                                <a href="javascript:void(0)" class="dropdown-notifications-read"><span
                                                        class="badge badge-dot"></span></a>
                                                <a href="javascript:void(0)"
                                                    class="dropdown-notifications-archive"><span
                                                        class="bx bx-x"></span></a>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 me-3">
                                                <div class="avatar">
                                                    <img src="../../assets/img/avatars/2.png" alt
                                                        class="w-px-40 h-auto rounded-circle">
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-1">New Message ??????</h6>
                                                <p class="mb-0">You have new message from Natalie</p>
                                                <small class="text-muted">1h ago</small>
                                            </div>
                                            <div class="flex-shrink-0 dropdown-notifications-actions">
                                                <a href="javascript:void(0)" class="dropdown-notifications-read"><span
                                                        class="badge badge-dot"></span></a>
                                                <a href="javascript:void(0)"
                                                    class="dropdown-notifications-archive"><span
                                                        class="bx bx-x"></span></a>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item list-group-item-action dropdown-notifications-item">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 me-3">
                                                <div class="avatar">
                                                    <span class="avatar-initial rounded-circle bg-label-success"><i
                                                            class="bx bx-cart"></i></span>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-1">Whoo! You have new order ???? </h6>
                                                <p class="mb-0">ACME Inc. made new order $1,154</p>
                                                <small class="text-muted">1 day ago</small>
                                            </div>
                                            <div class="flex-shrink-0 dropdown-notifications-actions">
                                                <a href="javascript:void(0)" class="dropdown-notifications-read"><span
                                                        class="badge badge-dot"></span></a>
                                                <a href="javascript:void(0)"
                                                    class="dropdown-notifications-archive"><span
                                                        class="bx bx-x"></span></a>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 me-3">
                                                <div class="avatar">
                                                    <img src="../../assets/img/avatars/9.png" alt
                                                        class="w-px-40 h-auto rounded-circle">
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-1">Application has been approved ???? </h6>
                                                <p class="mb-0">Your ABC project application has been approved.</p>
                                                <small class="text-muted">2 days ago</small>
                                            </div>
                                            <div class="flex-shrink-0 dropdown-notifications-actions">
                                                <a href="javascript:void(0)" class="dropdown-notifications-read"><span
                                                        class="badge badge-dot"></span></a>
                                                <a href="javascript:void(0)"
                                                    class="dropdown-notifications-archive"><span
                                                        class="bx bx-x"></span></a>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 me-3">
                                                <div class="avatar">
                                                    <span class="avatar-initial rounded-circle bg-label-success"><i
                                                            class="bx bx-pie-chart-alt"></i></span>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-1">Monthly report is generated</h6>
                                                <p class="mb-0">July monthly financial report is generated </p>
                                                <small class="text-muted">3 days ago</small>
                                            </div>
                                            <div class="flex-shrink-0 dropdown-notifications-actions">
                                                <a href="javascript:void(0)" class="dropdown-notifications-read"><span
                                                        class="badge badge-dot"></span></a>
                                                <a href="javascript:void(0)"
                                                    class="dropdown-notifications-archive"><span
                                                        class="bx bx-x"></span></a>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 me-3">
                                                <div class="avatar">
                                                    <img src="../../assets/img/avatars/5.png" alt
                                                        class="w-px-40 h-auto rounded-circle">
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-1">Send connection request</h6>
                                                <p class="mb-0">Peter sent you connection request</p>
                                                <small class="text-muted">4 days ago</small>
                                            </div>
                                            <div class="flex-shrink-0 dropdown-notifications-actions">
                                                <a href="javascript:void(0)" class="dropdown-notifications-read"><span
                                                        class="badge badge-dot"></span></a>
                                                <a href="javascript:void(0)"
                                                    class="dropdown-notifications-archive"><span
                                                        class="bx bx-x"></span></a>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item list-group-item-action dropdown-notifications-item">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 me-3">
                                                <div class="avatar">
                                                    <img src="../../assets/img/avatars/6.png" alt
                                                        class="w-px-40 h-auto rounded-circle">
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-1">New message from Jane</h6>
                                                <p class="mb-0">Your have new message from Jane</p>
                                                <small class="text-muted">5 days ago</small>
                                            </div>
                                            <div class="flex-shrink-0 dropdown-notifications-actions">
                                                <a href="javascript:void(0)" class="dropdown-notifications-read"><span
                                                        class="badge badge-dot"></span></a>
                                                <a href="javascript:void(0)"
                                                    class="dropdown-notifications-archive"><span
                                                        class="bx bx-x"></span></a>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 me-3">
                                                <div class="avatar">
                                                    <span class="avatar-initial rounded-circle bg-label-warning"><i
                                                            class="bx bx-error"></i></span>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-1">CPU is running high</h6>
                                                <p class="mb-0">CPU Utilization Percent is currently at 88.63%,</p>
                                                <small class="text-muted">5 days ago</small>
                                            </div>
                                            <div class="flex-shrink-0 dropdown-notifications-actions">
                                                <a href="javascript:void(0)" class="dropdown-notifications-read"><span
                                                        class="badge badge-dot"></span></a>
                                                <a href="javascript:void(0)"
                                                    class="dropdown-notifications-archive"><span
                                                        class="bx bx-x"></span></a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown-menu-footer border-top">
                                <a href="javascript:void(0);" class="dropdown-item d-flex justify-content-center p-3">
                                    View all notifications
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!--/ Notification -->
                    <!-- User -->
                    <li class="nav-item navbar-dropdown dropdown-user dropdown">
                        <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);"
                            data-bs-toggle="dropdown">
                            <div class="avatar avatar-online">
                                <img src="../../assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle">
                            </div>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <a class="dropdown-item" href="pages-account-settings-account.html">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 me-3">
                                            <div class="avatar avatar-online">
                                                <img src="../../assets/img/avatars/1.png" alt
                                                    class="w-px-40 h-auto rounded-circle">
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <span class="fw-semibold d-block">John Doe</span>
                                            <small class="text-muted">Admin</small>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <div class="dropdown-divider"></div>
                            </li>
                            <li>
                                <a class="dropdown-item" href="pages-profile-user.html">
                                    <i class="bx bx-user me-2"></i>
                                    <span class="align-middle">My Profile</span>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="pages-account-settings-account.html">
                                    <i class="bx bx-cog me-2"></i>
                                    <span class="align-middle">Settings</span>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="pages-account-settings-billing.html">
                                    <span class="d-flex align-items-center align-middle">
                                        <i class="flex-shrink-0 bx bx-credit-card me-2"></i>
                                        <span class="flex-grow-1 align-middle">Billing</span>
                                        <span
                                            class="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <div class="dropdown-divider"></div>
                            </li>
                            <li>
                                <a class="dropdown-item" href="pages-help-center-landing.html">
                                    <i class="bx bx-support me-2"></i>
                                    <span class="align-middle">Help</span>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="pages-faq.html">
                                    <i class="bx bx-help-circle me-2"></i>
                                    <span class="align-middle">FAQ</span>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="pages-pricing.html">
                                    <i class="bx bx-dollar me-2"></i>
                                    <span class="align-middle">Pricing</span>
                                </a>
                            </li>
                            <li>
                                <div class="dropdown-divider"></div>
                            </li>
                            <li>
                                <a class="dropdown-item" href="auth-login-cover.html" target="_blank">
                                    <i class="bx bx-power-off me-2"></i>
                                    <span class="align-middle">Log Out</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!--/ User -->


                </ul>
            </div>


            <!-- Search Small Screens -->
            <div class="navbar-search-wrapper search-input-wrapper  d-none">
                <input type="text" class="form-control search-input container-xxl border-0"
                    placeholder="Search..." aria-label="Search...">
                <i class="bx bx-x bx-sm search-toggler cursor-pointer"></i>
            </div>


        </nav>


    </div>

    <!-- / Navbar -->






    <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">
            <div class="app-email card">
                <div class="border-0">
                    <div class="row g-0">
                        <!-- Email Sidebar -->
                        <div class="col app-email-sidebar border-end flex-grow-0" id="app-email-sidebar">
                            <div class="btn-compost-wrapper d-grid">
                                <button class="btn btn-primary rounded-1 shadow-none btn-compose"
                                    data-bs-toggle="modal" data-bs-target="#emailComposeSidebar">Compose</button>
                            </div>
                            <!-- Email Filters -->
                            <div class="email-filters py-2">
                                <!-- Email Filters: Folder -->
                                <ul class="email-filter-folders list-unstyled pb-1" role="tablist">
                                    <li class="active d-flex justify-content-between">
                                        <a href="#!" class="nav-link active" role="tab"
                                            data-bs-toggle="tab" data-bs-target="#navs-left-home"
                                            aria-controls="navs-left-home" aria-selected="true"
                                            class="d-flex flex-wrap align-items-center">
                                            <i class="bx bx-data"></i>
                                            <span class="align-middle ms-2"><span
                                                    class="badge badge-pill badge-primary"></span>Mo??ambique</span>
                                        </a>
                                        <div class="badge bg-label-success rounded-0">GET</div>
                                    </li>
                                    <li class="d-flex">
                                        <a href="#!" role="tab" data-bs-toggle="tab"
                                            data-bs-target="#navs-left-profile" aria-controls="navs-left-profile"
                                            aria-selected="false"class="d-flex flex-wrap align-items-center">
                                            <i class="bx bx-send"></i>
                                            <span class="align-middle ms-2">Sent</span>
                                        </a>
                                    </li>
                                    <li class="d-flex justify-content-between" role="tab" data-bs-toggle="tab"
                                        data-bs-target="#navs-left-messages" aria-controls="navs-left-messages"
                                        aria-selected="false" data-target="draft">
                                        <a href="javascript:void(0);" class="d-flex flex-wrap align-items-center">
                                            <i class="bx bx-edit"></i>
                                            <span class="align-middle ms-2">Draft</span>
                                        </a>
                                        <div class="badge bg-label-warning rounded-0">1</div>
                                    </li>
                                    <li class="d-flex" data-target="starred">
                                        <a href="javascript:void(0);" class="d-flex flex-wrap align-items-center">
                                            <i class="bx bx-star"></i>
                                            <span class="align-middle ms-2">Starred</span>
                                        </a>
                                    </li>
                                    <li class="d-flex justify-content-between" data-target="spam">
                                        <a href="javascript:void(0);" class="d-flex flex-wrap align-items-center">
                                            <i class="bx bx-error-circle"></i>
                                            <span class="align-middle ms-2">Spam</span>
                                        </a>
                                        <div class="badge bg-label-danger rounded-0">6</div>
                                    </li>
                                    <li class="d-flex align-items-center" data-target="trash">
                                        <a href="javascript:void(0);" class="d-flex flex-wrap align-items-center">
                                            <i class="bx bx-trash-alt"></i>
                                            <span class="align-middle ms-2">Trash</span>
                                        </a>
                                    </li>
                                </ul>

                                <!-- Email Filters: Labels -->
                                <div class="email-filter-labels">
                                    <small class="mx-4 text-uppercase text-muted">Metedos</small>
                                    <ul class="list-unstyled mb-0">
                                        <li data-target="work">
                                            <a href="javascript:void(0);">
                                                <i class="badge badge-dot bg-success"></i>
                                                <span class="align-middle ms-2"><a
                                                        class="btn btn-success btn-sm shadow-none rounded-0 text-white">GET</a>
                                                </span>
                                            </a>
                                        </li>
                                        <li data-target="important">
                                            <a href="javascript:void(0);">
                                                <i class="badge badge-dot bg-warning"></i>
                                                <span class="align-middle ms-2"><a
                                                        class="btn btn-warning btn-sm shadow-none rounded-0 text-white">PUT</a></span>
                                            </a>
                                        </li>
                                        <li data-target="company">
                                            <a href="javascript:void(0);">
                                                <i class="badge badge-dot bg-primary"></i>
                                                <span class="align-middle ms-2"><a
                                                        class="btn btn-primary btn-sm shadow-none rounded-0 text-white">POST</a></span>
                                            </a>
                                        </li>
                                        <li data-target="private">
                                            <a href="javascript:void(0);">
                                                <i class="badge badge-dot bg-danger"></i>
                                                <span class="align-middle ms-2"><a
                                                        class="btn btn-danger btn-sm shadow-none rounded-0 text-white">DELETE</a></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <!--/ Email Filters -->
                            </div>
                        </div>
                        <!--/ Email Sidebar -->

                        <!-- Emails List -->
                        <div class="col app-emails-list">
                            <div class="card shadow-none border-0">
                                <div class="card-body emails-list-header p-3 py-lg-3 py-2">
                                    <!-- Email List: Search -->
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center w-100">
                                            <i class="bx bx-menu bx-sm cursor-pointer d-block d-lg-none me-3"
                                                data-bs-toggle="sidebar" data-target="#app-email-sidebar"
                                                data-overlay></i>
                                            <div class="mb-0 mb-lg-2 w-100">
                                                <div class="input-group input-group-merge shadow-none">
                                                    <span class="input-group-text border-0 ps-0 py-0"
                                                        id="email-search">
                                                        <i class="bx bx-search fs-4 text-muted"></i>
                                                    </span>
                                                    <input type="text"
                                                        class="form-control email-search-input border-0 py-0"
                                                        placeholder="Search mail" aria-label="Search..."
                                                        aria-describedby="email-search">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center mb-0 mb-md-2">
                                            <i
                                                class="bx bx-refresh scaleX-n1-rtl cursor-pointer email-refresh me-2 bx-sm text-muted"></i>
                                            <div class="dropdown">
                                                <i class="bx bx-dots-vertical-rounded cursor-pointer bx-sm text-muted"
                                                    id="emailsActions" data-bs-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                </i>
                                                <div class="dropdown-menu dropdown-menu-end"
                                                    aria-labelledby="emailsActions">
                                                    <a class="dropdown-item" href="javascript:void(0)">Mark as
                                                        read</a>
                                                    <a class="dropdown-item" href="javascript:void(0)">Mark as
                                                        unread</a>
                                                    <a class="dropdown-item" href="javascript:void(0)">Delete</a>
                                                    <a class="dropdown-item" href="javascript:void(0)">Archive</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="mx-n3 emails-list-header-hr">
                                    <!-- Email List: Actions -->
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <div class="form-check me-2">
                                                <input class="form-check-input" type="checkbox"
                                                    id="email-select-all">
                                                <label class="form-check-label" for="email-select-all"></label>
                                            </div>
                                            <i class="bx bx-trash-alt email-list-delete cursor-pointer me-3 fs-4"></i>
                                            <i class="bx bx-envelope email-list-read cursor-pointer me-3 fs-4"></i>
                                            <div class="dropdown">
                                                <i class="bx bx-folder fs-4 cursor-pointer me-3"
                                                    id="dropdownMenuFolder" data-bs-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false"></i>
                                                <div class="dropdown-menu dropdown-menu-end"
                                                    aria-labelledby="dropdownMenuFolder">
                                                    <a class="dropdown-item" href="javascript:void(0)">
                                                        <i class="bx bx-error-circle me-1"></i>
                                                        <span class="align-middle">Spam</span>
                                                    </a>
                                                    <a class="dropdown-item" href="javascript:void(0)">
                                                        <i class="bx bx-edit me-1"></i>
                                                        <span class="align-middle">Draft</span>
                                                    </a>
                                                    <a class="dropdown-item" href="javascript:void(0)">
                                                        <i class="bx bx-trash-alt me-1"></i>
                                                        <span class="align-middle">Trash</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="dropdown">
                                                <i class="bx bx-label fs-4 cursor-pointer me-3" id="dropdownLabel"
                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                </i>
                                                <div class="dropdown-menu dropdown-menu-end"
                                                    aria-labelledby="dropdownLabel">
                                                    <a class="dropdown-item" href="javascript:void(0)">
                                                        <i class="badge badge-dot bg-success me-1"></i>
                                                        <span class="align-middle">Workshop</span>
                                                    </a>
                                                    <a class="dropdown-item" href="javascript:void(0)">
                                                        <i class="badge badge-dot bg-primary me-1"></i>
                                                        <span class="align-middle">Company</span>
                                                    </a>
                                                    <a class="dropdown-item" href="javascript:void(0)">
                                                        <i class="badge badge-dot bg-warning me-1"></i>
                                                        <span class="align-middle">Important</span>
                                                    </a>
                                                    <a class="dropdown-item" href="javascript:void(0)">
                                                        <i class="badge badge-dot bg-danger me-1"></i>
                                                        <span class="align-middle">Private</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            class="email-pagination d-sm-flex d-none align-items-center flex-wrap justify-content-between justify-sm-content-end">
                                            <span class="d-sm-block d-none mx-3 text-muted">1-10 of 653</span>
                                            <i
                                                class="email-prev bx bx-chevron-left scaleX-n1-rtl cursor-pointer text-muted me-4 fs-4"></i>
                                            <i
                                                class="email-next bx bx-chevron-right scaleX-n1-rtl cursor-pointer fs-4"></i>
                                        </div>

                                    </div>
                                </div>
                                <hr class="container-m-nx m-0">
                                <!-- Email List: Items -->

                                <div class="email-list rounded-0">
                                    <div class="tab-content rounded-0">
                                        <div class="tab-pane fade  show active rounded-0" id="navs-left-home">

                                            @include('livewire.enclude.tab1')
                                        </div>
                                        <div class="tab-pane fade" id="navs-left-profile">
                                            <p>
                                                Donut drag??e jelly pie halvah. Danish gingerbread bonbon cookie wafer
                                                candy oat cake ice cream. Gummies
                                                halvah
                                                tootsie roll muffin biscuit icing dessert gingerbread. Pastry ice cream
                                                cheesecake fruitcake.
                                            </p>
                                            <p class="mb-0">
                                                Jelly-o jelly beans icing pastry cake cake lemon drops. Muffin muffin
                                                pie tiramisu halvah cotton candy
                                                liquorice caramels.
                                            </p>
                                        </div>
                                        <div class="tab-pane fade" id="navs-left-messages">
                                            <p>
                                                Oat cake chupa chups drag??e donut toffee. Sweet cotton candy jelly beans
                                                macaroon gummies cupcake gummi
                                                bears
                                                cake chocolate.
                                            </p>
                                            <p class="mb-0">
                                                Cake chocolate bar cotton candy apple pie tootsie roll ice cream apple
                                                pie brownie cake. Sweet roll icing
                                                sesame snaps caramels danish toffee. Brownie biscuit dessert dessert.
                                                Pudding jelly jelly-o tart brownie
                                                jelly.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="app-overlay"></div>
                        </div>
                        <!-- /Emails List -->

                    </div>
                </div>

            </div>
        </div>
    </div>

    <!-- Core JS -->
    <!-- build:js assets/vendor/js/core.js -->
    <script src="admin/vendor/libs/jquery/jquery.js"></script>
    <script src="admin/vendor/libs/popper/popper.js"></script>
    <script src="admin/vendor/js/bootstrap.js"></script>
    <script src="admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>

    <script src="admin/vendor/libs/hammer/hammer.js"></script>
    <script src="admin/vendor/libs/i18n/i18n.js"></script>
    <script src="admin/vendor/libs/typeahead-js/typeahead.js"></script>

    <script src="admin/vendor/js/menu.js"></script>
    <!-- endbuild -->

    <!-- Vendors JS -->
    <script src="admin/vendor/libs/quill/katex.js"></script>
    <script src="admin/vendor/libs/quill/quill.js"></script>
    <script src="admin/vendor/libs/select2/select2.js"></script>
    <script src="admin/vendor/libs/block-ui/block-ui.js"></script>

    <!-- Main JS -->
    <script src="admin/js/main.js"></script>

    <!-- Page JS -->
    <script src="admin/js/app-email.js"></script>


    </body>

    </html>
</div>
