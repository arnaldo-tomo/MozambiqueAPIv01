<div>
    
<!DOCTYPE html>
<html lang="en" class="light-style layout-navbar-fixed layout-menu-fixed " dir="ltr" data-theme="theme-default" data-assets-path="admin/" data-template="vertical-menu-template">

  
<!-- Mirrored from demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-email.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 05 Jan 2023 17:39:07 GMT -->
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet">

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

    <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->
    <!--? Template customizer: To hide customizer set displayCustomizer value false in config.js.  -->
    <script src="admin/vendor/js/template-customizer.js"></script>
    <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->
    <script src="admin/js/config.js"></script>
</head>

<body>

  <!-- Navbar -->



    <!-- Layout container -->
    <div class="layout-page">
      <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
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
        <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
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
        <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
          <i class='bx bx-grid-alt bx-sm'></i>
        </a>
        <div class="dropdown-menu dropdown-menu-end py-0">
          <div class="dropdown-menu-header border-bottom">
            <div class="dropdown-header d-flex align-items-center py-3">
              <h5 class="text-body mb-0 me-auto">Shortcuts</h5>
              <a href="javascript:void(0)" class="dropdown-shortcuts-add text-body" data-bs-toggle="tooltip" data-bs-placement="top" title="Add shortcuts"><i class="bx bx-sm bx-plus-circle"></i></a>
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
                <a href="pages-account-settings-account.html" class="stretched-link">Setting</a>
                <small class="text-muted mb-0">Account Settings</small>
              </div>
            </div>
            <div class="row row-bordered overflow-visible g-0">
              <div class="dropdown-shortcuts-item col">
                <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                  <i class="bx bx-help-circle fs-4"></i>
                </span>
                <a href="pages-help-center-landing.html" class="stretched-link">Help Center</a>
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
        <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
          <i class="bx bx-bell bx-sm"></i>
          <span class="badge bg-danger rounded-pill badge-notifications">5</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-end py-0">
          <li class="dropdown-menu-header border-bottom">
            <div class="dropdown-header d-flex align-items-center py-3">
              <h5 class="text-body mb-0 me-auto">Notification</h5>
              <a href="javascript:void(0)" class="dropdown-notifications-all text-body" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark all as read"><i class="bx fs-4 bx-envelope-open"></i></a>
            </div>
          </li>
          <li class="dropdown-notifications-list scrollable-container">
            <ul class="list-group list-group-flush">
              <li class="list-group-item list-group-item-action dropdown-notifications-item">
                <div class="d-flex">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar">
                      <img src="../../assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle">
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1">Congratulation Lettie 🎉</h6>
                    <p class="mb-0">Won the monthly best seller gold badge</p>
                    <small class="text-muted">1h ago</small>
                  </div>
                  <div class="flex-shrink-0 dropdown-notifications-actions">
                    <a href="javascript:void(0)" class="dropdown-notifications-read"><span class="badge badge-dot"></span></a>
                    <a href="javascript:void(0)" class="dropdown-notifications-archive"><span class="bx bx-x"></span></a>
                  </div>
                </div>
              </li>
              <li class="list-group-item list-group-item-action dropdown-notifications-item">
                <div class="d-flex">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar">
                      <span class="avatar-initial rounded-circle bg-label-danger">CF</span>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1">Charles Franklin</h6>
                    <p class="mb-0">Accepted your connection</p>
                    <small class="text-muted">12hr ago</small>
                  </div>
                  <div class="flex-shrink-0 dropdown-notifications-actions">
                    <a href="javascript:void(0)" class="dropdown-notifications-read"><span class="badge badge-dot"></span></a>
                    <a href="javascript:void(0)" class="dropdown-notifications-archive"><span class="bx bx-x"></span></a>
                  </div>
                </div>
              </li>
              <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                <div class="d-flex">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar">
                      <img src="../../assets/img/avatars/2.png" alt class="w-px-40 h-auto rounded-circle">
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1">New Message ✉️</h6>
                    <p class="mb-0">You have new message from Natalie</p>
                    <small class="text-muted">1h ago</small>
                  </div>
                  <div class="flex-shrink-0 dropdown-notifications-actions">
                    <a href="javascript:void(0)" class="dropdown-notifications-read"><span class="badge badge-dot"></span></a>
                    <a href="javascript:void(0)" class="dropdown-notifications-archive"><span class="bx bx-x"></span></a>
                  </div>
                </div>
              </li>
              <li class="list-group-item list-group-item-action dropdown-notifications-item">
                <div class="d-flex">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar">
                      <span class="avatar-initial rounded-circle bg-label-success"><i class="bx bx-cart"></i></span>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1">Whoo! You have new order 🛒 </h6>
                    <p class="mb-0">ACME Inc. made new order $1,154</p>
                    <small class="text-muted">1 day ago</small>
                  </div>
                  <div class="flex-shrink-0 dropdown-notifications-actions">
                    <a href="javascript:void(0)" class="dropdown-notifications-read"><span class="badge badge-dot"></span></a>
                    <a href="javascript:void(0)" class="dropdown-notifications-archive"><span class="bx bx-x"></span></a>
                  </div>
                </div>
              </li>
              <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                <div class="d-flex">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar">
                      <img src="../../assets/img/avatars/9.png" alt class="w-px-40 h-auto rounded-circle">
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1">Application has been approved 🚀 </h6>
                    <p class="mb-0">Your ABC project application has been approved.</p>
                    <small class="text-muted">2 days ago</small>
                  </div>
                  <div class="flex-shrink-0 dropdown-notifications-actions">
                    <a href="javascript:void(0)" class="dropdown-notifications-read"><span class="badge badge-dot"></span></a>
                    <a href="javascript:void(0)" class="dropdown-notifications-archive"><span class="bx bx-x"></span></a>
                  </div>
                </div>
              </li>
              <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                <div class="d-flex">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar">
                      <span class="avatar-initial rounded-circle bg-label-success"><i class="bx bx-pie-chart-alt"></i></span>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1">Monthly report is generated</h6>
                    <p class="mb-0">July monthly financial report is generated </p>
                    <small class="text-muted">3 days ago</small>
                  </div>
                  <div class="flex-shrink-0 dropdown-notifications-actions">
                    <a href="javascript:void(0)" class="dropdown-notifications-read"><span class="badge badge-dot"></span></a>
                    <a href="javascript:void(0)" class="dropdown-notifications-archive"><span class="bx bx-x"></span></a>
                  </div>
                </div>
              </li>
              <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                <div class="d-flex">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar">
                      <img src="../../assets/img/avatars/5.png" alt class="w-px-40 h-auto rounded-circle">
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1">Send connection request</h6>
                    <p class="mb-0">Peter sent you connection request</p>
                    <small class="text-muted">4 days ago</small>
                  </div>
                  <div class="flex-shrink-0 dropdown-notifications-actions">
                    <a href="javascript:void(0)" class="dropdown-notifications-read"><span class="badge badge-dot"></span></a>
                    <a href="javascript:void(0)" class="dropdown-notifications-archive"><span class="bx bx-x"></span></a>
                  </div>
                </div>
              </li>
              <li class="list-group-item list-group-item-action dropdown-notifications-item">
                <div class="d-flex">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar">
                      <img src="../../assets/img/avatars/6.png" alt class="w-px-40 h-auto rounded-circle">
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1">New message from Jane</h6>
                    <p class="mb-0">Your have new message from Jane</p>
                    <small class="text-muted">5 days ago</small>
                  </div>
                  <div class="flex-shrink-0 dropdown-notifications-actions">
                    <a href="javascript:void(0)" class="dropdown-notifications-read"><span class="badge badge-dot"></span></a>
                    <a href="javascript:void(0)" class="dropdown-notifications-archive"><span class="bx bx-x"></span></a>
                  </div>
                </div>
              </li>
              <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                <div class="d-flex">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar">
                      <span class="avatar-initial rounded-circle bg-label-warning"><i class="bx bx-error"></i></span>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1">CPU is running high</h6>
                    <p class="mb-0">CPU Utilization Percent is currently at 88.63%,</p>
                    <small class="text-muted">5 days ago</small>
                  </div>
                  <div class="flex-shrink-0 dropdown-notifications-actions">
                    <a href="javascript:void(0)" class="dropdown-notifications-read"><span class="badge badge-dot"></span></a>
                    <a href="javascript:void(0)" class="dropdown-notifications-archive"><span class="bx bx-x"></span></a>
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
        <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
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
                    <img src="../../assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle">
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
                <span class="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
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
    <input type="text" class="form-control search-input container-xxl border-0" placeholder="Search..." aria-label="Search...">
    <i class="bx bx-x bx-sm search-toggler cursor-pointer"></i>
  </div>
</nav>
</div>
</div>


 <!-- Content wrapper -->
 <div class="content-wrapper">
    <div class="container-xxl flex-grow-1 container-p-y">
<div class="app-email card">
  <div class="border-0">
    <div class="row g-0">
      <!-- Email Sidebar -->
      <div class="col app-email-sidebar border-end flex-grow-0" id="app-email-sidebar">
        <div class="btn-compost-wrapper d-grid">
          <button class="btn btn-primary btn-compose" data-bs-toggle="modal" data-bs-target="#emailComposeSidebar">Compose</button>
        </div>
        <!-- Email Filters -->
        <div class="email-filters py-2">
          <!-- Email Filters: Folder -->
          <ul class="email-filter-folders list-unstyled pb-1">
            <li class="active d-flex justify-content-between" data-target="inbox">
              <a href="javascript:void(0);" class="d-flex flex-wrap align-items-center">
                <i class="bx bx-data"></i>
                <span class="align-middle ms-2">Inbox</span>
              </a>
              <div class="badge bg-label-primary rounded-pill">21</div>
            </li>
            <li class="d-flex" data-target="sent">
              <a href="javascript:void(0);" class="d-flex flex-wrap align-items-center">
                <i class="bx bx-send"></i>
                <span class="align-middle ms-2">Sent</span>
              </a>
            </li>
            <li class="d-flex justify-content-between" data-target="draft">
              <a href="javascript:void(0);" class="d-flex flex-wrap align-items-center">
                <i class="bx bx-edit"></i>
                <span class="align-middle ms-2">Draft</span>
              </a>
              <div class="badge bg-label-warning rounded-pill">1</div>
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
              <div class="badge bg-label-danger rounded-pill">6</div>
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
                  <span class="align-middle ms-2"><a class="btn btn-success btn-sm shadow-none reunded text-white">GET</a> </span>
                </a>
              </li>
              <li data-target="company">
                <a href="javascript:void(0);">
                  <i class="badge badge-dot bg-primary"></i>
                  <span class="align-middle ms-2">POST</span>
                </a>
              </li>
              <li data-target="important">
                <a href="javascript:void(0);">
                  <i class="badge badge-dot bg-warning"></i>
                  <span class="align-middle ms-2">Update</span>
                </a>
              </li>
              <li data-target="private">
                <a href="javascript:void(0);">
                  <i class="badge badge-dot bg-danger"></i>
                  <span class="align-middle ms-2">Deelet</span>
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
                <i class="bx bx-menu bx-sm cursor-pointer d-block d-lg-none me-3" data-bs-toggle="sidebar" data-target="#app-email-sidebar" data-overlay></i>
                <div class="mb-0 mb-lg-2 w-100">
                  <div class="input-group input-group-merge shadow-none">
                    <span class="input-group-text border-0 ps-0 py-0" id="email-search">
                      <i class="bx bx-search fs-4 text-muted"></i>
                    </span>
                    <input type="text" class="form-control email-search-input border-0 py-0" placeholder="Search mail" aria-label="Search..." aria-describedby="email-search">
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center mb-0 mb-md-2">
                <i class="bx bx-refresh scaleX-n1-rtl cursor-pointer email-refresh me-2 bx-sm text-muted"></i>
                <div class="dropdown">
                  <i class="bx bx-dots-vertical-rounded cursor-pointer bx-sm text-muted" id="emailsActions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  </i>
                  <div class="dropdown-menu dropdown-menu-end" aria-labelledby="emailsActions">
                    <a class="dropdown-item" href="javascript:void(0)">Mark as read</a>
                    <a class="dropdown-item" href="javascript:void(0)">Mark as unread</a>
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
                  <input class="form-check-input" type="checkbox" id="email-select-all">
                  <label class="form-check-label" for="email-select-all"></label>
                </div>
                <i class="bx bx-trash-alt email-list-delete cursor-pointer me-3 fs-4"></i>
                <i class="bx bx-envelope email-list-read cursor-pointer me-3 fs-4"></i>
                <div class="dropdown">
                  <i class="bx bx-folder fs-4 cursor-pointer me-3" id="dropdownMenuFolder" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                  <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuFolder">
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
                  <i class="bx bx-label fs-4 cursor-pointer me-3" id="dropdownLabel" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  </i>
                  <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownLabel">
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
              <div class="email-pagination d-sm-flex d-none align-items-center flex-wrap justify-content-between justify-sm-content-end">
                <span class="d-sm-block d-none mx-3 text-muted">1-10 of 653</span>
                <i class="email-prev bx bx-chevron-left scaleX-n1-rtl cursor-pointer text-muted me-4 fs-4"></i>
                <i class="email-next bx bx-chevron-right scaleX-n1-rtl cursor-pointer fs-4"></i>
              </div>
            </div>
          </div>
          <hr class="container-m-nx m-0">
          <!-- Email List: Items -->
          <div class="email-list pt-0">
            <ul class="list-unstyled m-0">
              <li class="email-list-item email-marked-read" data-starred="true" data-bs-toggle="sidebar" data-target="#app-email-view">
                <div class="d-flex align-items-center">
                  <div class="form-check">
                    <input class="email-list-item-input form-check-input" type="checkbox" id="email-1">
                    <label class="form-check-label" for="email-1"></label>
                  </div>
                  <i class="email-list-item-bookmark bx bx-star d-sm-inline-block d-none cursor-pointer mx-4 bx-sm"></i>
                  <img src="admin/img/avatars/1.png" alt="user-avatar" class="d-block flex-shrink-0 rounded-circle me-sm-3 me-0" height="32" width="32" />
                  <div class="email-list-item-content ms-2 ms-md-0 me-2">
                    <span class="email-list-item-username me-2 h6">Chandler Bing</span>
                    <span class="email-list-item-subject d-xl-inline-block d-block"> Focused impactful open issues from the project of GitHub</span>
                  </div>
                  <div class="email-list-item-meta ms-auto d-flex align-items-center">
                    <span class="email-list-item-label badge badge-dot bg-danger d-none d-md-inline-block me-2" data-label="private"></span>
                    <small class="email-list-item-time text-muted">08:40 AM</small>
                    <ul class="list-inline email-list-item-actions">
                      <li class="list-inline-item email-delete"> <i class='bx bx-trash-alt fs-4'></i></li>
                      <li class="list-inline-item email-read"> <i class='bx bx-envelope fs-4'></i> </li>
                      <li class="list-inline-item"> <i class="bx bx-error-circle fs-4"></i> </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="email-list-item email-marked-read" data-sent="true" data-bs-toggle="sidebar" data-target="#app-email-view">
                <div class="d-flex align-items-center">
                  <div class="form-check">
                    <input class="email-list-item-input form-check-input" type="checkbox" id="email-2">
                    <label class="form-check-label" for="email-2"></label>
                  </div>
                  <i class="email-list-item-bookmark bx bx-star d-sm-inline-block d-none cursor-pointer mx-4 bx-sm"></i>
                  <img src="admin/img/avatars/2.png" alt="user-avatar" class="d-block flex-shrink-0 rounded-circle me-sm-3 me-0" height="32" width="32" />
                  <div class="email-list-item-content ms-2 ms-md-0 me-2">
                    <span class="email-list-item-username me-2 h6">Ross Geller</span>
                    <span class="email-list-item-subject d-xl-inline-block d-block"> Hey Katy, Dessert soufflé tootsie roll soufflé carrot cake halvah jelly.</span>
                  </div>
                  <div class="email-list-item-meta ms-auto d-flex align-items-center">
                    <span class="email-list-item-label badge badge-dot bg-danger d-none d-md-inline-block me-2" data-label="private"></span>
                    <small class="email-list-item-time text-muted">10:12 AM</small>
                    <ul class="list-inline email-list-item-actions">
                      <li class="list-inline-item email-delete"> <i class='bx bx-trash-alt fs-4'></i></li>
                      <li class="list-inline-item email-unread"> <i class='bx bx-envelope fs-4'></i> </li>
                      <li class="list-inline-item"> <i class="bx bx-error-circle fs-4"></i> </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="email-list-item email-marked-read" data-draft="true" data-bs-toggle="sidebar" data-target="#app-email-view">
                <div class="d-flex align-items-center">
                  <div class="form-check">
                    <input class="email-list-item-input form-check-input" type="checkbox" id="email-3">
                    <label class="form-check-label" for="email-3"></label>
                  </div>
                  <i class="email-list-item-bookmark bx bx-star d-sm-inline-block d-none cursor-pointer mx-4 bx-sm"></i>
                  <div class="avatar avatar-sm d-block flex-shrink-0 me-sm-3 me-0">
                    <span class="avatar-initial rounded-circle bg-label-warning">BS</span>
                  </div>
                  <div class="email-list-item-content ms-2 ms-md-0 me-2">
                    <span class="email-list-item-username me-2 h6">Barney Stinson</span>
                    <span class="email-list-item-subject d-xl-inline-block d-block"> Hey Katy, Soufflé apple pie caramels soufflé tiramisu bear claw.</span>
                  </div>
                  <div class="email-list-item-meta ms-auto d-flex align-items-center">
                    <span class="email-list-item-label badge badge-dot bg-primary d-none d-md-inline-block me-2" data-label="company"></span>
                    <small class="email-list-item-time text-muted">12:44 AM</small>
                    <ul class="list-inline email-list-item-actions">
                      <li class="list-inline-item email-delete"> <i class='bx bx-trash-alt fs-4'></i></li>
                      <li class="list-inline-item email-read"> <i class='bx bx-envelope fs-4'></i> </li>
                      <li class="list-inline-item"> <i class="bx bx-error-circle fs-4"></i> </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="email-list-item" data-starred="true" data-bs-toggle="sidebar" data-target="#app-email-view">
                <div class="d-flex align-items-center">
                  <div class="form-check">
                    <input class="email-list-item-input form-check-input" type="checkbox" id="email-4">
                    <label class="form-check-label" for="email-4"></label>
                  </div>
                  <i class="email-list-item-bookmark bx bx-star d-sm-inline-block d-none cursor-pointer mx-4 bx-sm"></i>
                  <img src="admin/img/avatars/3.png" alt="user-avatar" class="d-block flex-shrink-0 rounded-circle me-sm-3 me-0" height="32" width="32" />
                  <div class="email-list-item-content ms-2 ms-md-0 me-2">
                    <span class="email-list-item-username me-2 h6">Pheobe Buffay</span>
                    <span class="email-list-item-subject d-xl-inline-block d-block"> Hey Katy, Tart croissant jujubes gummies macaroon Icing sweet.</span>
                  </div>
                  <div class="email-list-item-meta ms-auto d-flex align-items-center">
                    <span class="email-list-item-label badge badge-dot bg-success d-none d-md-inline-block me-2" data-label="work"></span>
                    <small class="email-list-item-time text-muted">Yesterday</small>
                    <ul class="list-inline email-list-item-actions">
                      <li class="list-inline-item email-delete"> <i class='bx bx-trash-alt fs-4'></i></li>
                      <li class="list-inline-item email-unread"> <i class='bx bx-envelope fs-4'></i> </li>
                      <li class="list-inline-item"> <i class="bx bx-error-circle fs-4"></i> </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="email-list-item email-marked-read" data-spam="true" data-bs-toggle="sidebar" data-target="#app-email-view">
                <div class="d-flex align-items-center">
                  <div class="form-check">
                    <input class="email-list-item-input form-check-input" type="checkbox" id="email-5">
                    <label class="form-check-label" for="email-5"></label>
                  </div>
                  <i class="email-list-item-bookmark bx bx-star d-sm-inline-block d-none cursor-pointer mx-4 bx-sm"></i>
                  <img src="admin/img/avatars/4.png" alt="user-avatar" class="d-block flex-shrink-0 rounded-circle me-sm-3 me-0" height="32" width="32" />
                  <div class="email-list-item-content ms-2 ms-md-0 me-2">
                    <span class="email-list-item-username me-2 h6">Ted Mosby</span>
                    <span class="email-list-item-subject d-xl-inline-block d-block"> Hey Katy, I love Pudding cookie chocolate sweet tiramisu jujubes I love danish.</span>
                  </div>
                  <div class="email-list-item-meta ms-auto d-flex align-items-center">
                    <span class="email-list-item-label badge badge-dot bg-primary d-none d-md-inline-block me-2" data-label="company"></span>
                    <small class="email-list-item-time text-muted">Yesterday</small>
                    <ul class="list-inline email-list-item-actions">
                      <li class="list-inline-item email-delete"> <i class='bx bx-trash-alt fs-4'></i></li>
                      <li class="list-inline-item email-unread"> <i class='bx bx-envelope fs-4'></i> </li>
                      <li class="list-inline-item"> <i class="bx bx-error-circle fs-4"></i> </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="email-list-item" data-trash="true" data-bs-toggle="sidebar" data-target="#app-email-view">
                <div class="d-flex align-items-center">
                  <div class="form-check">
                    <input class="email-list-item-input form-check-input" type="checkbox" id="email-6">
                    <label class="form-check-label" for="email-6"></label>
                  </div>
                  <i class="email-list-item-bookmark bx bx-star d-sm-inline-block d-none cursor-pointer mx-4 bx-sm"></i>
                  <div class="avatar avatar-sm d-block flex-shrink-0 me-sm-3 me-0">
                    <span class="avatar-initial rounded-circle bg-label-info">Sk</span>
                  </div>
                  <div class="email-list-item-content ms-2 ms-md-0 me-2">
                    <span class="email-list-item-username me-2 h6">Stacy Cooper</span>
                    <span class="email-list-item-subject d-xl-inline-block d-block"> Hey Katy, I love danish. Cupcake I love carrot cake sugar plum I love.</span>
                  </div>
                  <div class="email-list-item-meta ms-auto d-flex align-items-center">
                    <span class="email-list-item-label badge badge-dot bg-info d-none d-md-inline-block me-2" data-label="work"></span>
                    <small class="email-list-item-time text-muted">5 May</small>
                    <ul class="list-inline email-list-item-actions">
                      <li class="list-inline-item email-delete"> <i class='bx bx-trash-alt fs-4'></i></li>
                      <li class="list-inline-item email-read"> <i class='bx bx-envelope fs-4'></i> </li>
                      <li class="list-inline-item"> <i class="bx bx-error-circle fs-4"></i> </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="email-list-item email-marked-read" data-draft="true" data-bs-toggle="sidebar" data-target="#app-email-view">
                <div class="d-flex align-items-center">
                  <div class="form-check">
                    <input class="email-list-item-input form-check-input" type="checkbox" id="email-7">
                    <label class="form-check-label" for="email-7"></label>
                  </div>
                  <i class="email-list-item-bookmark bx bx-star d-sm-inline-block d-none cursor-pointer mx-4 bx-sm"></i>
                  <img src="admin/img/avatars/5.png" alt="user-avatar" class="d-block flex-shrink-0 rounded-circle me-sm-3 me-0" height="32" width="32" />
                  <div class="email-list-item-content ms-2 ms-md-0 me-2">
                    <span class="email-list-item-username me-2 h6">Rachel Green</span>
                    <span class="email-list-item-subject d-xl-inline-block d-block"> Hey Katy, Chocolate cake pudding chocolate bar ice cream bonbon lollipop.</span>
                  </div>
                  <div class="email-list-item-meta ms-auto d-flex align-items-center">
                    <span class="email-list-item-label badge badge-dot bg-primary d-none d-md-inline-block me-2" data-label="company"></span>
                    <small class="email-list-item-time text-muted">15 May</small>
                    <ul class="list-inline email-list-item-actions">
                      <li class="list-inline-item email-delete"> <i class='bx bx-trash-alt fs-4'></i></li>
                      <li class="list-inline-item email-unread"> <i class='bx bx-envelope fs-4'></i> </li>
                      <li class="list-inline-item"> <i class="bx bx-error-circle fs-4"></i> </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="email-list-item" data-starred="true" data-bs-toggle="sidebar" data-target="#app-email-view">
                <div class="d-flex align-items-center">
                  <div class="form-check">
                    <input class="email-list-item-input form-check-input" type="checkbox" id="email-8">
                    <label class="form-check-label" for="email-8"></label>
                  </div>
                  <i class="email-list-item-bookmark bx bx-star d-sm-inline-block d-none cursor-pointer mx-4 bx-sm"></i>
                  <img src="admin/img/avatars/6.png" alt="user-avatar" class="d-block flex-shrink-0 rounded-circle me-sm-3 me-0" height="32" width="32" />
                  <div class="email-list-item-content ms-2 ms-md-0 me-2">
                    <span class="email-list-item-username me-2 h6">Grace Shelby</span>
                    <span class="email-list-item-subject d-xl-inline-block d-block"> Hey Katy, Icing gummi bears ice cream croissant dessert wafer.</span>
                  </div>
                  <div class="email-list-item-meta ms-auto d-flex align-items-center">
                    <span class="email-list-item-attachment bx bx-paperclip cursor-pointer float-end float-sm-none"></span>
                    <span class="email-list-item-label badge badge-dot bg-danger d-none d-md-inline-block ms-2" data-label="private"></span>
                    <small class="email-list-item-time text-muted">20 Apr</small>
                    <ul class="list-inline email-list-item-actions">
                      <li class="list-inline-item email-delete"> <i class='bx bx-trash-alt fs-4'></i></li>
                      <li class="list-inline-item email-unread"> <i class='bx bx-envelope fs-4'></i> </li>
                      <li class="list-inline-item"> <i class="bx bx-error-circle fs-4"></i> </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="email-list-item email-marked-read" data-spam="true" data-bs-toggle="sidebar" data-target="#app-email-view">
                <div class="d-flex align-items-center">
                  <div class="form-check">
                    <input class="email-list-item-input form-check-input" type="checkbox" id="email-9">
                    <label class="form-check-label" for="email-9"></label>
                  </div>
                  <i class="email-list-item-bookmark bx bx-star d-sm-inline-block d-none cursor-pointer mx-4 bx-sm"></i>
                  <div class="avatar avatar-sm d-block flex-shrink-0 me-sm-3 me-0">
                    <span class="avatar-initial rounded-circle bg-label-danger">JF</span>
                  </div>
                  <div class="email-list-item-content ms-2 ms-md-0 me-2">
                    <span class="email-list-item-username me-2 h6">Jacob Frye</span>
                    <span class="email-list-item-subject d-xl-inline-block d-block"> Hey Katy, Chocolate cake pudding chocolate bar ice cream Sweet.</span>
                  </div>
                  <div class="email-list-item-meta ms-auto d-flex align-items-center">
                    <span class="email-list-item-label badge badge-dot bg-info d-none d-md-inline-block me-2" data-label="important"></span>
                    <small class="email-list-item-time text-muted">25 Mar</small>
                    <ul class="list-inline email-list-item-actions">
                      <li class="list-inline-item email-delete"> <i class='bx bx-trash-alt fs-4'></i></li>
                      <li class="list-inline-item email-unread"> <i class='bx bx-envelope fs-4'></i> </li>
                      <li class="list-inline-item"> <i class="bx bx-error-circle fs-4"></i> </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="email-list-item" data-trash="true" data-bs-toggle="sidebar" data-target="#app-email-view">
                <div class="d-flex align-items-center">
                  <div class="form-check">
                    <input class="email-list-item-input form-check-input" type="checkbox" id="email-10">
                    <label class="form-check-label" for="email-10"></label>
                  </div>
                  <i class="email-list-item-bookmark bx bx-star d-sm-inline-block d-none cursor-pointer mx-4 bx-sm"></i>
                  <img src="admin/img/avatars/9.png" alt="user-avatar" class="d-block flex-shrink-0 rounded-circle me-sm-3 me-0" height="32" width="32" />
                  <div class="email-list-item-content ms-2 ms-md-0 me-2">
                    <span class="email-list-item-username me-2 h6">Alistair Crowley </span>
                    <span class="email-list-item-subject d-xl-inline-block d-block"> Hey Katy, I love danish. Cupcake I love carrot cake sugar plum I love.</span>
                  </div>
                  <div class="email-list-item-meta ms-auto d-flex align-items-center">
                    <span class="email-list-item-label badge badge-dot bg-primary d-none d-md-inline-block me-2" data-label="company"></span>
                    <small class="email-list-item-time text-muted">25 Feb</small>
                    <ul class="list-inline email-list-item-actions">
                      <li class="list-inline-item email-delete"> <i class='bx bx-trash-alt fs-4'></i></li>
                      <li class="list-inline-item email-unread"> <i class='bx bx-envelope fs-4'></i> </li>
                      <li class="list-inline-item"> <i class="bx bx-error-circle fs-4"></i> </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="app-overlay"></div>
      </div>
      <!-- /Emails List -->

      <!-- Email View -->
      <div class="col app-email-view flex-grow-0 bg-body" id="app-email-view">
        <div class="app-email-view-header p-3 py-md-3 py-2 rounded-0">
          <!-- Email View : Title  bar-->
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center overflow-hidden">
              <i class="bx bx-chevron-left bx-sm cursor-pointer me-2" data-bs-toggle="sidebar" data-target="#app-email-view"></i>
              <h6 class="text-truncate mb-0 me-2">Focused impactful open issues</h6>
              <span class="badge bg-label-warning">Important</span>
            </div>
            <!-- Email View : Action  bar-->
            <div class="d-flex">
              <i class='bx bx-printer d-sm-block d-none fs-4'></i>
              <div class="dropdown ms-3">
                <i class="bx bx-dots-vertical-rounded cursor-pointer fs-4" id="dropdownMoreOptions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                </i>
                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMoreOptions">
                  <a class="dropdown-item" href="javascript:void(0)">
                    <i class="bx bx-envelope-open bx-xs me-1"></i>
                    <span class="align-middle">Mark as unread</span>
                  </a>
                  <a class="dropdown-item" href="javascript:void(0)">
                    <i class="bx bx-envelope-open bx-xs me-1"></i>
                    <span class="align-middle">Mark as unread</span>
                  </a>
                  <a class="dropdown-item" href="javascript:void(0)">
                    <i class="bx bx-star bx-xs me-1"></i>
                    <span class="align-middle">Add star</span>
                  </a>
                  <a class="dropdown-item" href="javascript:void(0)">
                    <i class="bx bx-calendar bx-xs me-1"></i>
                    <span class="align-middle">Create Event</span>
                  </a>
                  <a class="dropdown-item" href="javascript:void(0)">
                    <i class="bx bx-volume-mute bx-xs me-1"></i>
                    <span class="align-middle">Mute</span>
                  </a>
                  <a class="dropdown-item d-sm-none d-block" href="javascript:void(0)">
                    <i class="bx bx-printer bx-xs me-1"></i>
                    <span class="align-middle">Print</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr class="app-email-view-hr mx-n3 mb-2">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <i class='bx bx-trash-alt cursor-pointer me-3 fs-4' data-bs-toggle="sidebar" data-target="#app-email-view"></i>
              <i class='bx bx-envelope fs-4 cursor-pointer me-3'></i>
              <div class="dropdown">
                <i class="bx bx-folder cursor-pointer fs-4 me-3" id="dropdownMenuFolder" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                </i>
                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuFolder">
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
                <i class="bx bx-label fs-4 cursor-pointer me-3" id="dropdownLabel" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                </i>
                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownLabel">
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
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center flex-wrap justify-content-end">
              <span class="d-sm-block d-none mx-3 text-muted">1-10 of 653</span>
              <i class="bx bx-chevron-left scaleX-n1-rtl cursor-pointer text-muted me-4 fs-4"></i>
              <i class="bx bx-chevron-right scaleX-n1-rtl cursor-pointer fs-4"></i>
            </div>
          </div>
        </div>
        <hr class="m-0">
        <!-- Email View : Content-->
        <div class="app-email-view-content py-4">
          <p class="email-earlier-msgs text-center text-muted cursor-pointer mb-5">1 Earlier Message</p>
          <!-- Email View : Previous mails-->
          <div class="card email-card-prev mx-sm-4 mx-3 border">
            <div class="card-header d-flex justify-content-between align-items-center flex-wrap">
              <div class="d-flex align-items-center mb-sm-0 mb-3">
                <img src="admin/img/avatars/2.png" alt="user-avatar" class="flex-shrink-0 rounded-circle me-2" height="38" width="38" />
                <div class="flex-grow-1 ms-1">
                  <h6 class="m-0">Ross Geller</h6>
                  <small class="text-muted">rossGeller@email.com</small>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <small class="mb-0 me-3 text-muted">June 20th 2020, 08:30 AM</small>
                <i class="bx bx-paperclip cursor-pointer me-2 bx-sm"></i>
                <i class="email-list-item-bookmark bx bx-star cursor-pointer me-2 bx-sm"></i>
                <div class="dropdown me-3">
                  <i class="bx bx-dots-vertical-rounded cursor-pointer bx-sm" id="dropdownEmail" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  </i>
                  <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownEmail">
                    <a class="dropdown-item scroll-to-reply" href="javascript:void(0)">
                      <i class="bx bx-share me-1"></i>
                      <span class="align-middle">Reply</span>
                    </a>
                    <a class="dropdown-item" href="javascript:void(0)">
                      <i class="bx bx-share scaleX-n1 scaleX-n1-rtl me-1"></i>
                      <span class="align-middle">Forward</span>
                    </a>
                    <a class="dropdown-item" href="javascript:void(0)">
                      <i class="bx bx-info-circle me-1"></i>
                      <span class="align-middle">Report</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="fw-bold">Greetings!</p>
              <p>
                It is a long established fact that a reader will be distracted by the readable content
                of a
                page when looking at its layout.The point of using Lorem Ipsum is that it has a
                more-or-less
                normal distribution of letters, as opposed to using 'Content here, content here',making
                it
                look like readable English.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or randomised words which don't
                look
                even slightly believable.
              </p>
              <p class="mb-0">Sincerely yours,</p>
              <p class="fw-bold mb-0">Envato Design Team</p>
              <hr>
              <p class="mb-2">Attachments</p>
              <div class="cursor-pointer">
                <i class="bx bx-file"></i>
                <span class="align-middle ms-1">report.xlsx</span>
              </div>
            </div>
          </div>
          <!-- Email View : Last mail-->
          <div class="card email-card-last mx-sm-4 mx-3 mt-4 border">
            <div class="card-header d-flex justify-content-between align-items-center flex-wrap border-bottom">
              <div class="d-flex align-items-center mb-sm-0 mb-3">
                <img src="admin/img/avatars/1.png" alt="user-avatar" class="flex-shrink-0 rounded-circle me-2" height="38" width="38" />
                <div class="flex-grow-1 ms-1">
                  <h6 class="m-0">Chandler Bing</h6>
                  <small class="text-muted">iAmAhoot@email.com</small>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <small class="mb-0 me-3 text-muted">June 20th 2020, 08:10 AM</small>
                <i class="bx bx-paperclip cursor-pointer me-2 bx-sm"></i>
                <i class="email-list-item-bookmark bx bx-star cursor-pointer me-2 bx-sm"></i>
                <div class="dropdown me-3">
                  <i class="bx bx-dots-vertical-rounded cursor-pointer bx-sm" id="dropdownEmail" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                  <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownEmail">
                    <a class="dropdown-item scroll-to-reply" href="javascript:void(0)">
                      <i class="bx bx-share me-1"></i>
                      <span class="align-middle">Reply</span>
                    </a>
                    <a class="dropdown-item" href="javascript:void(0)">
                      <i class="bx bx-share me-1 scaleX-n1 scaleX-n1-rtl"></i>
                      <span class="align-middle">Forward</span>
                    </a>
                    <a class="dropdown-item" href="javascript:void(0)">
                      <i class="bx bx-info-circle me-1"></i>
                      <span class="align-middle">Report</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body pt-3">
              <p class="fw-bold">Hey John,</p>
              <p>
                It is a long established fact that a reader will be distracted by the readable content
                of a
                page when looking at its layout.The point of using Lorem Ipsum is that it has a
                more-or-less
                normal distribution of letters, as opposed to using 'Content here, content here',making
                it
                look like readable English.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or randomised words which don't
                look
                even slightly believable.
              </p>
              <p class="mb-0">Sincerely yours,</p>
              <p class="fw-bold mb-0">Envato Design Team</p>
              <hr>
              <p class="mb-2">Attachments</p>
              <div class="cursor-pointer">
                <i class="bx bx-file"></i>
                <span class="align-middle ms-1">report.xlsx</span>
              </div>
            </div>
          </div>
          <!-- Email View : Reply mail-->
          <div class="email-reply card mt-4 mx-sm-4 mx-3 border">
            <h6 class="card-header border-0">Reply to Ross Geller</h6>
            <div class="card-body pt-0 px-3">
              <div class="d-flex justify-content-start">
                <div class="email-reply-toolbar border-0 w-100 ps-0">
                  <span class="ql-formats me-0">
                    <button class="ql-bold"></button>
                    <button class="ql-italic"></button>
                    <button class="ql-underline"></button>
                    <button class="ql-list" value="ordered"></button>
                    <button class="ql-list" value="bullet"></button>
                    <button class="ql-link"></button>
                    <button class="ql-image"></button>
                  </span>
                </div>
              </div>
              <div class="email-reply-editor"></div>
              <div class="d-flex justify-content-end align-items-center">
                <div class="cursor-pointer me-3">
                  <i class="bx bx-paperclip"></i>
                  <span class="align-middle">Attachments</span>
                </div>
                <button class="btn btn-primary">
                  <i class="bx bx-paper-plane me-1"></i>
                  <span class="align-middle">Send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Email View -->
    </div>
  </div>

  <div class="container">
    <div class="app-email-compose modal" id="emailComposeSidebar" tabindex="-1" aria-labelledby="emailComposeSidebarLabel" aria-hidden="true">
      <div class="modal-dialog m-0 me-md-4 mb-4 modal-lg">
        <div class="modal-content p-0">
          <div class="modal-header py-3 bg-body">
            <h5 class="modal-title fs-5">Compose Mail</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body flex-grow-1 pb-sm-0 p-4 py-2">
            <form class="email-compose-form">
              <div class="email-compose-to d-flex justify-content-between align-items-center">
                <label class="form-label mb-2 text-muted" for="emailContacts">To:</label>
                <div class="select2-primary border-0 shadow-none flex-grow-1 mx-2">
                  <select class="select2 select-email-contacts form-select" id="emailContacts" name="emailContacts" multiple>
                    <option data-avatar="1.png" value="Jane Foster">Jane Foster</option>
                    <option data-avatar="3.png" value="Donna Frank">Donna Frank</option>
                    <option data-avatar="5.png" value="Gabrielle Robertson">Gabrielle Robertson</option>
                    <option data-avatar="7.png" value="Lori Spears">Lori Spears</option>
                    <option data-avatar="9.png" value="Sandy Vega">Sandy Vega</option>
                    <option data-avatar="11.png" value="Cheryl May">Cheryl May</option>
                  </select>
                </div>
                <div class="email-compose-toggle-wrapper mb-2">
                  <a class="email-compose-toggle-cc text-body" href="javascript:void(0);">Cc |</a>
                  <a class="email-compose-toggle-bcc text-body" href="javascript:void(0);">Bcc</a>
                </div>
              </div>
  
              <div class="email-compose-cc d-none">
                <hr class="mx-n4 my-2">
                <div class="d-flex align-items-center">
                  <label for="email-cc" class="form-label mb-0">Cc:</label>
                  <input type="text" class="form-control border-0 shadow-none flex-grow-1 mx-2" id="email-cc" placeholder="someone@email.com">
                </div>
              </div>
              <div class="email-compose-bcc d-none">
                <hr class="mx-n4 my-2">
                <div class="d-flex align-items-center">
                  <label for="email-bcc" class="form-label mb-0">Bcc:</label>
                  <input type="text" class="form-control border-0 shadow-none flex-grow-1 mx-2" id="email-bcc" placeholder="someone@email.com">
                </div>
              </div>
              <hr class="mx-n4 my-0">
              <div class="email-compose-subject d-flex align-items-center my-1">
                <label for="email-subject" class="form-label mb-0 text-muted">Subject:</label>
                <input type="text" class="form-control border-0 shadow-none flex-grow-1 mx-2" id="email-subject">
              </div>
              <div class="email-compose-message mx-n4">
                <div class="d-flex justify-content-end">
                  <div class="email-editor-toolbar border-bottom-0 w-100">
                    <span class="ql-formats me-0">
                      <button class="ql-bold"></button>
                      <button class="ql-italic"></button>
                      <button class="ql-underline"></button>
                      <button class="ql-list" value="ordered"></button>
                      <button class="ql-list" value="bullet"></button>
                      <button class="ql-link"></button>
                      <button class="ql-image"></button>
                    </span>
                  </div>
                </div>
                <div class="email-editor"></div>
              </div>
              <hr class="mx-n4 mt-0 mb-2">
              <div class="email-compose-actions d-flex justify-content-between align-items-center my-2 py-1">
                <div class="d-flex align-items-center">
                  <div class="btn-group">
                    <button type="reset" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Send</button>
                    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript:void(0);">Schedule send</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Save draft</a></li>
                    </ul>
                  </div>
                  <label for="attach-file"><i class="bx bx-paperclip cursor-pointer ms-2"></i></label>
                  <input type="file" name="file-input" class="d-none" id="attach-file">
                </div>
                <div class="d-flex align-items-center">
                  <div class="dropdown">
                    <i class="bx bx-dots-vertical-rounded cursor-pointer" data-bs-toggle="dropdown" aria-expanded="false"></i>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMoreActions">
                      <li><button type="button" class="dropdown-item">Add Label</button></li>
                      <li><button type="button" class="dropdown-item">Plain text mode</button></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><button type="button" class="dropdown-item">Print</button></li>
                      <li><button type="button" class="dropdown-item">Check Spelling</button></li>
                    </ul>
                  </div>
                  <button type="reset" class="btn" data-bs-dismiss="modal" aria-label="Close"><i class="bx bx-trash-alt"></i></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
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


<!-- Mirrored from demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-email.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 05 Jan 2023 17:39:14 GMT -->
</html>

<!-- beautify ignore:end -->


</div>