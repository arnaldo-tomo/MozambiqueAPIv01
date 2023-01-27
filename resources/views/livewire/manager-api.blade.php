<div>
    <!doctype html>
    <html lang="en">
    <head>
            
            <meta charset="utf-8" />
            <title>{{ config('app.name') }}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
            <meta content="Themesbrand" name="author" />
            <!-- App favicon -->
            <link rel="shortcut icon" href="assets/images/favicon.ico">
            
            <!-- plugin css -->
            <link href="assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css" rel="stylesheet" type="text/css" />
    
            <!-- preloader css -->
            <link rel="stylesheet" href="assets/css/preloader.min.css" type="text/css" />
    
            <!-- Bootstrap Css -->
            <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
            <!-- Icons Css -->
            <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
            <!-- App Css-->
            <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
    
        </head>
    
        <body data-layout="horizontal" data-topbar="white">
    
            <!-- Begin page -->
            <div id="layout-wrapper">
    
                <header id="page-topbar">
                    <div class="navbar-header">
                        <div class="d-flex">
                            <!-- LOGO -->
                            <div class="navbar-brand-box">
                                <a href="/managerapi" class="logo logo-dark">
                                    <span class="logo-sm">
                                        <img src="assets/images/logo-sm.svg" alt="" height="24">
                                    </span>
                                    <span class="logo-lg">
                                        <img src="assets/images/logo-sm.svg" alt="" height="24"> <span class="logo-txt">{{ config('app.name') }}</span>
                                    </span>
                                </a>
    
                                <a href="/managerapi" class="logo logo-light">
                                    <span class="logo-sm">
                                        <img src="assets/images/logo-sm.svg" alt="" height="24">
                                    </span>
                                    <span class="logo-lg">
                                        <img src="assets/images/logo-sm.svg" alt="" height="24"> <span class="logo-txt">{{ config('app.name') }}</span>
                                    </span>
                                </a>
                            </div>
    
                            <button type="button" class="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                                <i class="fa fa-fw fa-bars"></i>
                            </button>
    
                        </div>
    
                        <div class="d-flex">
    
        
                            <div class="dropdown d-inline-block">
                                <button type="button" class="btn header-item bg-soft-light border-start border-end" id="page-header-user-dropdown"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img class="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg"
                                        alt="Header Avatar">
                                    <span class="d-none d-xl-inline-block ms-1 fw-medium">{{ session('usuario') }}</span>
                                    <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-end">
                                                                      <a class="dropdown-item" href="auth-logout.html"><i class="mdi mdi-logout font-size-16 align-middle me-1"></i> Logout</a>
                                </div>
                            </div>
                
                        </div>
                    </div>
                </header>
        
                <div class="topnav">
                    <div class="container-fluid">
                        <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
    
                            <div class="collapse navbar-collapse" id="topnav-menu-content">
                                <ul class="navbar-nav">
    
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle arrow-none" href="index.html" id="topnav-dashboard" role="button">
                                            <i data-feather="home"></i><span data-key="t-dashboard">Dashboard</span>
                                        </a>
                                    </li>
    
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-uielement" role="button">
                                            <i data-feather="briefcase"></i>
                                            <span data-key="t-elements">Elements</span> 
                                            <div class="arrow-down"></div>
                                        </a>
    
                                        <div class="dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl" aria-labelledby="topnav-uielement">
                                            <div class="ps-2 p-lg-0">
                                                <div class="row">
                                                    <div class="col-lg-8">
                                                        <div>
                                                            <div class="menu-title">Elements</div>
                                                            <div class="row g-0">
                                                                <div class="col-lg-5">
                                                                    <div>
                                                                        <a href="ui-alerts.html" class="dropdown-item" data-key="t-alerts">Alerts</a>
                                                                        <a href="ui-buttons.html" class="dropdown-item" data-key="t-buttons">Buttons</a>
                                                                        <a href="ui-cards.html" class="dropdown-item" data-key="t-cards">Cards</a>
                                                                        <a href="ui-carousel.html" class="dropdown-item" data-key="t-carousel">Carousel</a>
                                                                        <a href="ui-dropdowns.html" class="dropdown-item" data-key="t-dropdowns">Dropdowns</a>
                                                                        <a href="ui-grid.html" class="dropdown-item" data-key="t-grid">Grid</a>
                                                                        <a href="ui-images.html" class="dropdown-item" data-key="t-images">Images</a>
                                                                        <a href="ui-modals.html" class="dropdown-item" data-key="t-modals">Modals</a>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-5">
                                                                    <div>
                                                                        <a href="ui-offcanvas.html" class="dropdown-item" data-key="t-offcanvas">Offcanvas</a>
                                                                        <a href="ui-progressbars.html" class="dropdown-item" data-key="t-progress-bars">Progress Bars</a>
                                                                        <a href="ui-placeholders.html" class="dropdown-item" data-key="t-progress-bars">Placeholders</a>
                                                                        <a href="ui-tabs-accordions.html" class="dropdown-item" data-key="t-tabs-accordions">Tabs & Accordions</a>
                                                                        <a href="ui-typography.html" class="dropdown-item" data-key="t-typography">Typography</a>
                                                                        <a href="ui-video.html" class="dropdown-item" data-key="t-video">Video</a>
                                                                        <a href="ui-general.html" class="dropdown-item" data-key="t-general">General</a>
                                                                        <a href="ui-colors.html" class="dropdown-item" data-key="t-colors">Colors</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                        
                                                    <div class="col-lg-4">
                                                        <div>
                                                            <div class="menu-title">Extended</div>
                                                            <div>
                                                                <a href="extended-lightbox.html" class="dropdown-item" data-key="t-lightbox">Lightbox</a>
                                                                <a href="extended-rangeslider.html" class="dropdown-item" data-key="t-range-slider">Range Slider</a>
                                                                <a href="extended-sweet-alert.html" class="dropdown-item" data-key="t-sweet-alert">SweetAlert 2</a>
                                                                <a href="extended-session-timeout.html" class="dropdown-item" data-key="t-session-timeout">Session Timeout</a>
                                                                <a href="extended-rating.html" class="dropdown-item" data-key="t-rating">Rating</a>
                                                                <a href="extended-notifications.html" class="dropdown-item" data-key="t-notifications">Notifications</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages" role="button">
                                            <i data-feather="grid"></i><span data-key="t-apps">Apps</span> <div class="arrow-down"></div>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="topnav-pages">
    
                                            <div class="dropdown">
                                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-ecommerce"
                                                    role="button">
                                                    <span data-key="t-ecommerce">Ecommerce</span> <div class="arrow-down"></div>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="topnav-ecommerce">
    
                                                    <a href="ecommerce-products.html" class="dropdown-item" data-key="t-products">Products</a>
                                                    <a href="ecommerce-product-detail.html" class="dropdown-item" data-key="t-product-detail">Product Detail</a>
                                                    <a href="ecommerce-orders.html" class="dropdown-item" data-key="t-orders">Orders</a>
                                                    <a href="ecommerce-customers.html" class="dropdown-item" data-key="t-customers">Customers</a>
                                                    <a href="ecommerce-cart.html" class="dropdown-item" data-key="t-cart">Cart</a>
                                                    <a href="ecommerce-checkout.html" class="dropdown-item" data-key="t-checkout">Checkout</a>
                                                    <a href="ecommerce-shops.html" class="dropdown-item" data-key="t-shops">Shops</a>
                                                    <a href="ecommerce-add-product.html" class="dropdown-item" data-key="t-add-product">Add Product</a>
                                                </div>
                                            </div>
    
    
                                            <a href="apps-calendar.html" class="dropdown-item" data-key="t-calendar">Calendar</a>
                                            <a href="apps-chat.html" class="dropdown-item" data-key="t-chat">Chat</a>
                                
                                            <div class="dropdown">
                                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-email"
                                                    role="button">
                                                    <span data-key="t-email">Email</span> <div class="arrow-down"></div>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="topnav-email">
                                                    <a href="apps-email-inbox.html" class="dropdown-item" data-key="t-inbox">Inbox</a>
                                                    <a href="apps-email-read.html" class="dropdown-item" data-key="t-read-email">Read Email</a>
                                                </div>
                                            </div>
                                
                                            <div class="dropdown">
                                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-tasks"
                                                    role="button">
                                                    <span data-key="t-tasks">Tasks</span> <div class="arrow-down"></div>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="topnav-tasks">
                                                    <a href="tasks-list.html" class="dropdown-item" data-key="t-task-list">Task List</a>
                                                    <a href="tasks-kanban.html" class="dropdown-item" data-key="t-kanban-board">Kanban Board</a>
                                                    <a href="tasks-create.html" class="dropdown-item" data-key="t-create-task">Create Task</a>
                                                </div>
                                            </div>
                                            <div class="dropdown">
                                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-contact"
                                                    role="button">
                                                    <span data-key="t-contacts">Contacts</span> <div class="arrow-down"></div>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="topnav-contact">
                                                    <a href="apps-contacts-grid.html" class="dropdown-item" data-key="t-user-grid">User Grid</a>
                                                    <a href="apps-contacts-list.html" class="dropdown-item" data-key="t-user-list">User List</a>
                                                    <a href="apps-contacts-profile.html" class="dropdown-item" data-key="t-profile">Profile</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-components" role="button">
                                            <i data-feather="box"></i><span data-key="t-components">Components</span> <div class="arrow-down"></div>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="topnav-components">
                                            <div class="dropdown">
                                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-form"
                                                    role="button">
                                                    <span data-key="t-forms">Forms</span> <div class="arrow-down"></div>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="topnav-form">
                                                    <a href="form-elements.html" class="dropdown-item" data-key="t-form-elements">Basic Elements</a>
                                                    <a href="form-validation.html" class="dropdown-item" data-key="t-form-validation">Validation</a>
                                                    <a href="form-advanced.html" class="dropdown-item" data-key="t-form-advanced">Advanced Plugins</a>
                                                    <a href="form-editors.html" class="dropdown-item" data-key="t-form-editors">Editors</a>
                                                    <a href="form-uploads.html" class="dropdown-item" data-key="t-form-upload">File Upload</a>
                                                    <a href="form-wizard.html" class="dropdown-item" data-key="t-form-wizard">Wizard</a>
                                                    <a href="form-mask.html" class="dropdown-item" data-key="t-form-mask">Mask</a>
                                                </div>
                                            </div>
                                            <div class="dropdown">
                                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-table"
                                                    role="button">
                                                    <span data-key="t-tables">Tables</span> <div class="arrow-down"></div>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="topnav-table">
                                                    <a href="tables-basic.html" class="dropdown-item" data-key="t-basic-tables">Bootstrap Basic</a>
                                                    <a href="tables-datatable.html" class="dropdown-item" data-key="t-data-tables">Data Tables</a>
                                                    <a href="tables-responsive.html" class="dropdown-item" data-key="t-responsive-table">Responsive</a>
                                                    <a href="tables-editable.html" class="dropdown-item" data-key="t-editable-table">Editable</a>
                                                </div>
                                            </div>
                                            <div class="dropdown">
                                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-charts"
                                                    role="button">
                                                    <span data-key="t-charts">Charts</span> <div class="arrow-down"></div>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="topnav-charts">
                                                    <a href="charts-apex.html" class="dropdown-item" data-key="t-apex-charts">Apex charts</a>
                                                    <a href="charts-echart.html" class="dropdown-item" data-key="t-e-charts">E charts</a>
                                                    <a href="charts-chartjs.html" class="dropdown-item" data-key="t-chartjs-charts">Chartjs</a>
                                                    <a href="charts-knob.html" class="dropdown-item" data-key="t-knob-charts">Jquery Knob</a>
                                                    <a href="charts-sparkline.html" class="dropdown-item" data-key="t-sparkline-charts">Sparkline</a>
                                                </div>
                                            </div>
                                            <div class="dropdown">
                                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-icons"
                                                    role="button">
                                                    <span data-key="t-icons">Icons</span> <div class="arrow-down"></div>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="topnav-icons">
                                                    <a href="icons-feather.html" class="dropdown-item" data-key="t-feather">Feather</a>
                                                    <a href="icons-boxicons.html" class="dropdown-item" data-key="t-boxicons">Boxicons</a>
                                                    <a href="icons-materialdesign.html" class="dropdown-item" data-key="t-material-design">Material Design</a>
                                                    <a href="icons-dripicons.html" class="dropdown-item" data-key="t-dripicons">Dripicons</a>
                                                    <a href="icons-fontawesome.html" class="dropdown-item" data-key="t-font-awesome">Font Awesome 5</a>
                                                </div>
                                            </div>
                                            <div class="dropdown">
                                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-map" role="button">
                                                    <span data-key="t-maps">Maps</span> <div class="arrow-down"></div>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="topnav-map">
                                                    <a href="maps-google.html" class="dropdown-item" data-key="t-g-maps">Google</a>
                                                    <a href="maps-vector.html" class="dropdown-item" data-key="t-v-maps">Vector</a>
                                                    <a href="maps-leaflet.html" class="dropdown-item" data-key="t-l-maps">Leaflet</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-more" role="button">
                                            <i data-feather="file-text"></i><span data-key="t-extra-pages">Extra Pages</span> <div class="arrow-down"></div>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="topnav-more">
    
                                            <div class="dropdown">
                                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-auth" role="button">
                                                    <span data-key="t-authentication">Authentication</span> <div class="arrow-down"></div>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="topnav-auth">
                                                    <a href="auth-login.html" class="dropdown-item" data-key="t-login">Login</a>
                                                    <a href="auth-register.html" class="dropdown-item" data-key="t-register">Register</a>
                                                    <a href="auth-recoverpw.html" class="dropdown-item" data-key="t-recover-password">Recover Password</a>
                                                    <a href="auth-lock-screen.html" class="dropdown-item" data-key="t-lock-screen">Lock Screen</a>
                                                    <a href="auth-logout.html" class="dropdown-item" data-key="t-logout">Log Out</a>
                                                    <a href="auth-confirm-mail.html" class="dropdown-item" data-key="t-confirm-mail">Confirm Mail</a>
                                                    <a href="auth-email-verification.html" class="dropdown-item" data-key="t-email-verification">Email verification</a>
                                                    <a href="auth-two-step-verification.html" class="dropdown-item" data-key="t-two-step-verification">Two step verification</a>
                                                </div>
                                            </div>
                                            <div class="dropdown">
                                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-utility" role="button">
                                                    <span data-key="t-utility">Utility</span> <div class="arrow-down"></div>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="topnav-utility">
                                                    <a href="pages-starter.html" class="dropdown-item" data-key="t-starter-page">Starter Page</a>
                                                    <a href="pages-maintenance.html" class="dropdown-item" data-key="t-maintenance">Maintenance</a>
                                                    <a href="pages-comingsoon.html" class="dropdown-item" data-key="t-coming-soon">Coming Soon</a>
                                                    <a href="pages-timeline.html" class="dropdown-item" data-key="t-timeline">Timeline</a>
                                                    <a href="pages-faqs.html" class="dropdown-item" data-key="t-faqs">FAQs</a>
                                                    <a href="pages-pricing.html" class="dropdown-item" data-key="t-pricing">Pricing</a>
                                                    <a href="pages-404.html" class="dropdown-item" data-key="t-error-404">Error 404</a>
                                                    <a href="pages-500.html" class="dropdown-item" data-key="t-error-500">Error 500</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle arrow-none" href="layouts-horizontal.html" role="button">
                                            <i data-feather="layout"></i><span data-key="t-horizontal">Horizontal</span>
                                        </a>
                                    </li>
    
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
    
                <!-- ============================================================== -->
                <!-- Start right Content here -->
                <!-- ============================================================== -->
                <div class="main-content">
    
                    <div class="page-content">
                        <div class="container-fluid">
    
                            <!-- start page title -->
                            <div class="row">
                                <div class="col-12">
                                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                        <h4 class="mb-sm-0 font-size-18">Horizontal</h4>
    
                                        <div class="page-title-right">
                                            <ol class="breadcrumb m-0">
                                                <li class="breadcrumb-item"><a href="javascript: void(0);">Layouts</a></li>
                                                <li class="breadcrumb-item active">Horizontal</li>
                                            </ol>
                                        </div>
    
                                    </div>
                                </div>
                            </div>
                            <!-- end page title -->
                            
                            <div class="row">
                                <div class="col-xl-3 col-md-6">
                                    <!-- card -->
                                    <div class="card card-h-100">
                                        <!-- card body -->
                                        <div class="card-body">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-grow-1">
                                                    <span class="text-muted mb-3 lh-1 d-block text-truncate">Total Sales</span>
                                                    <h4 class="mb-3">
                                                        $<span class="counter-value" data-target="354.5">0</span>k
                                                    </h4>
                                                    <div class="text-nowrap">
                                                        <span class="badge bg-soft-success text-success">+$20.9k</span>
                                                        <span class="ms-1 text-muted font-size-13">Since last week</span>
                                                    </div>
                                                </div>
            
                                                <div class="flex-shrink-0 text-end dash-widget">
                                                    <div id="mini-chart1" data-colors='["#1c84ee", "#33c38e"]' class="apex-charts"></div>
                                                </div>
                                            </div>
                                        </div><!-- end card body -->
                                    </div><!-- end card -->
                                </div><!-- end col -->
            
                                <div class="col-xl-3 col-md-6">
                                    <!-- card -->
                                    <div class="card card-h-100">
                                        <!-- card body -->
                                        <div class="card-body">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-grow-1">
                                                    <span class="text-muted mb-3 lh-1 d-block text-truncate">Total Items</span>
                                                    <h4 class="mb-3">
                                                        <span class="counter-value" data-target="1256">0</span>
                                                    </h4>
                                                    <div class="text-nowrap">
                                                        <span class="badge bg-soft-danger text-danger">-29 Trades</span>
                                                        <span class="ms-1 text-muted font-size-13">Since last week</span>
                                                    </div>
                                                </div>
                                                <div class="flex-shrink-0 text-end dash-widget">
                                                    <div id="mini-chart2" data-colors='["#1c84ee", "#33c38e"]' class="apex-charts"></div>
                                                </div>
                                            </div>
                                        </div><!-- end card body -->
                                    </div><!-- end card -->
                                </div><!-- end col-->
            
                                <div class="col-xl-3 col-md-6">
                                    <!-- card -->
                                    <div class="card card-h-100">
                                        <!-- card body -->
                                        <div class="card-body">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-grow-1">
                                                    <span class="text-muted mb-3 lh-1 d-block text-truncate">Average Sales</span>
                                                    <h4 class="mb-3">
                                                        $<span class="counter-value" data-target="7.54">0</span>M
                                                    </h4>
                                                    <div class="text-nowrap">
                                                        <span class="badge bg-soft-success text-success">+ $2.8k</span>
                                                        <span class="ms-1 text-muted font-size-13">Since last week</span>
                                                    </div>
                                                </div>
                                                <div class="flex-shrink-0 text-end dash-widget">
                                                    <div id="mini-chart3" data-colors='["#1c84ee", "#33c38e"]' class="apex-charts"></div>
                                                </div>
                                            </div>
                                        </div><!-- end card body -->
                                    </div><!-- end card -->
                                </div><!-- end col -->
            
                                <div class="col-xl-3 col-md-6">
                                    <!-- card -->
                                    <div class="card card-h-100">
                                        <!-- card body -->
                                        <div class="card-body">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-grow-1">
                                                    <span class="text-muted mb-3 lh-1 d-block text-truncate">Order Delivery</span>
                                                    <h4 class="mb-3">
                                                        <span class="counter-value" data-target="18.34">0</span>%
                                                    </h4>
                                                    <div class="text-nowrap">
                                                        <span class="badge bg-soft-success text-success">+5.32%</span>
                                                        <span class="ms-1 text-muted font-size-13">Since last week</span>
                                                    </div>
                                                </div>
                                                <div class="flex-shrink-0 text-end dash-widget">
                                                    <div id="mini-chart4" data-colors='["#1c84ee", "#33c38e"]' class="apex-charts"></div>
                                                </div>
                                            </div>
                                        </div><!-- end card body -->
                                    </div><!-- end card -->
                                </div><!-- end col -->    
                            </div><!-- end row-->
    
                            <div class="row">
                                <div class="col-xl-8">
                                    <!-- card -->
                                    <div class="card">
                                        <!-- card body -->
                                        <div class="card-body">
                                            <div class="d-flex flex-wrap align-items-center mb-4">
                                                <h5 class="card-title me-2">Market Overview</h5>
                                                <div class="ms-auto">
                                                    <div>
                                                        <button type="button" class="btn btn-soft-primary btn-sm">
                                                            ALL
                                                        </button>
                                                        <button type="button" class="btn btn-soft-secondary btn-sm">
                                                            1M
                                                        </button>
                                                        <button type="button" class="btn btn-soft-secondary btn-sm">
                                                            6M
                                                        </button>
                                                        <button type="button" class="btn btn-soft-secondary btn-sm active">
                                                            1Y
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
    
                                            <div class="row align-items-center">
                                                <div class="col-xl-8">
                                                    <div>
                                                        <div id="market-overview" data-colors='["#1c84ee", "#33c38e"]' class="apex-charts"></div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4">
                                                    <div class="p-4">
                                                        <div class="mt-0">
                                                            <div class="d-flex align-items-center">
                                                                <div class="avatar-sm m-auto">
                                                                    <span class="avatar-title rounded-circle bg-light text-dark font-size-13">
                                                                        1
                                                                    </span>
                                                                </div>
                                                                <div class="flex-grow-1 ms-3">
                                                                    <span class="font-size-14">Mobile Phones</span>
                                                                </div>
            
                                                                <div class="flex-shrink-0">
                                                                    <span class="badge rounded-pill badge-soft-success font-size-12 fw-medium">+5.4%</span>
                                                                </div>
                                                            </div>
                                                        </div>
            
                                                        <div class="mt-3">
                                                            <div class="d-flex align-items-center">
                                                                <div class="avatar-sm m-auto">
                                                                    <span class="avatar-title rounded-circle bg-light text-dark font-size-13">
                                                                        2
                                                                    </span>
                                                                </div>
                                                                <div class="flex-grow-1 ms-3">
                                                                    <span class="font-size-14">Smart Watch</span>
                                                                </div>
            
                                                                <div class="flex-shrink-0">
                                                                    <span class="badge rounded-pill badge-soft-success font-size-12 fw-medium">+6.8%</span>
                                                                </div>
                                                            </div>
                                                        </div>
            
                                                        <div class="mt-3">
                                                            <div class="d-flex align-items-center">
                                                                <div class="avatar-sm m-auto">
                                                                    <span class="avatar-title rounded-circle bg-light text-dark font-size-13">
                                                                        3
                                                                    </span>
                                                                </div>
                                                                <div class="flex-grow-1 ms-3">
                                                                    <span class="font-size-14">Protable Acoustics</span>
                                                                </div>
            
                                                                <div class="flex-shrink-0">
                                                                    <span class="badge rounded-pill badge-soft-danger font-size-12 fw-medium">-4.9%</span>
                                                                </div>
                                                            </div>
                                                        </div>
            
                                                        <div class="mt-3">
                                                            <div class="d-flex align-items-center">
                                                                <div class="avatar-sm m-auto">
                                                                    <span class="avatar-title rounded-circle bg-light text-dark font-size-13">
                                                                        4
                                                                    </span>
                                                                </div>
                                                                <div class="flex-grow-1 ms-3">
                                                                    <span class="font-size-14">Smart Speakers</span>
                                                                </div>
            
                                                                <div class="flex-shrink-0">
                                                                    <span class="badge rounded-pill badge-soft-success font-size-12 fw-medium">+3.5%</span>
                                                                </div>
                                                            </div>
                                                        </div>
    
                                                        <div class="mt-3">
                                                            <div class="d-flex align-items-center">
                                                                <div class="avatar-sm m-auto">
                                                                    <span class="avatar-title rounded-circle bg-light text-dark font-size-13">
                                                                        5
                                                                    </span>
                                                                </div>
                                                                <div class="flex-grow-1 ms-3">
                                                                    <span class="font-size-14">Camcorders</span>
                                                                </div>
            
                                                                <div class="flex-shrink-0">
                                                                    <span class="badge rounded-pill badge-soft-danger font-size-12 fw-medium">-0.3%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="mt-4 pt-2">
                                                            <a href="#" class="btn btn-primary w-100">See All Balances <i
                                                                    class="mdi mdi-arrow-right ms-1"></i></a>
                                                        </div>
            
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end card -->
                                    </div>
                                    <!-- end col -->
                                </div>
                                <!-- end row-->
            
                                <div class="col-xl-4">
                                    <!-- card -->
                                    <div class="card">
                                        <!-- card body -->
                                        <div class="card-body">
                                            <div class="d-flex flex-wrap align-items-center mb-4">
                                                <h5 class="card-title me-2">Sales by Locations</h5>
                                                <div class="ms-auto">
                                                    <div class="dropdown">
                                                        <a class="dropdown-toggle text-reset" href="#" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <span class="text-muted font-size-12">Sort By:</span> <span class="fw-medium">World<i class="mdi mdi-chevron-down ms-1"></i></span>
                                                        </a>
    
                                                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                                            <a class="dropdown-item" href="#">USA</a>
                                                            <a class="dropdown-item" href="#">Russia</a>
                                                            <a class="dropdown-item" href="#">Australia</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
    
                                            <div id="sales-by-locations" data-colors='["#33c38e"]' style="height: 253px"></div>
    
                                            <div class="px-2 py-2">
                                                <p class="mb-1">USA <span class="float-end">75%</span></p>
                                                <div class="progress mt-2" style="height: 6px;">
                                                    <div class="progress-bar progress-bar-striped bg-primary" role="progressbar"
                                                        style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="75">
                                                    </div>
                                                </div>
    
                                                <p class="mt-3 mb-1">Russia <span class="float-end">55%</span></p>
                                                <div class="progress mt-2" style="height: 6px;">
                                                    <div class="progress-bar progress-bar-striped bg-primary" role="progressbar"
                                                        style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="55">
                                                    </div>
                                                </div>
    
                                                <p class="mt-3 mb-1">Australia <span class="float-end">85%</span></p>
                                                <div class="progress mt-2" style="height: 6px;">
                                                    <div class="progress-bar progress-bar-striped bg-primary" role="progressbar"
                                                        style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="85">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end card body -->
                                    </div>
                                    <!-- end card -->
                                </div>
                                <!-- end col -->
                            </div>
                            <!-- end row-->
    
                            <div class="row">
                                <div class="col-xl-3">
                                    <div class="card">
                                        <div class="card-header align-items-center d-flex">
                                            <h4 class="card-title mb-0 flex-grow-1">Customer List</h4>
                                            <div class="flex-shrink-0">
                                                <div class="dropdown">
                                                    <a class=" dropdown-toggle" href="#" id="dropdownMenuButton2"
                                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <span class="text-muted">All Members<i class="mdi mdi-chevron-down ms-1"></i></span>
                                                    </a>
                            
                                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
                                                        <a class="dropdown-item" href="#">Members</a>
                                                        <a class="dropdown-item" href="#">New Members</a>
                                                        <a class="dropdown-item" href="#">Old Members</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end card header -->
    
                                        <div class="card-body px-0">
                                            <div class="px-3" data-simplebar style="max-height: 386px;">
                                                <div class="d-flex align-items-center pb-4">
                                                    <div class="avatar-md me-4">
                                                        <img src="assets/images/users/avatar-2.jpg" class="img-fluid rounded-circle" alt="">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h5 class="font-size-15 mb-1"><a href="#" class="text-dark">Randy Matthews</a></h5>
                                                        <span class="text-muted">Randy@gmail.com</span>
                                                    </div>
                                                    <div class="flex-shrink-0 text-end">
                                                        <div class="dropdown align-self-start">
                                                            <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i class="bx bx-dots-vertical-rounded font-size-24 text-dark"></i>
                                                            </a>
                                                            <div class="dropdown-menu">
                                                                <a class="dropdown-item" href="#">Copy</a>
                                                                <a class="dropdown-item" href="#">Save</a>
                                                                <a class="dropdown-item" href="#">Forward</a>
                                                                <a class="dropdown-item" href="#">Delete</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <div class="d-flex align-items-center pb-4">
                                                    <div class="avatar-md me-4">
                                                        <img src="assets/images/users/avatar-4.jpg" class="img-fluid rounded-circle" alt="">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h5 class="font-size-15 mb-1"><a href="#" class="text-dark">Vernon Wood</a></h5>
                                                        <span class="text-muted">Vernon@gmail.com</span>
                                                    </div>
                                                    <div class="flex-shrink-0 text-end">
                                                        <div class="dropdown align-self-start">
                                                            <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i class="bx bx-dots-vertical-rounded font-size-24 text-dark"></i>
                                                            </a>
                                                            <div class="dropdown-menu">
                                                                <a class="dropdown-item" href="#">Copy</a>
                                                                <a class="dropdown-item" href="#">Save</a>
                                                                <a class="dropdown-item" href="#">Forward</a>
                                                                <a class="dropdown-item" href="#">Delete</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <div class="d-flex align-items-center pb-4">
                                                    <div class="avatar-md me-4">
                                                        <img src="assets/images/users/avatar-5.jpg" class="img-fluid rounded-circle" alt="">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h5 class="font-size-15 mb-1"><a href="#" class="text-dark">Howard Rhoades</a></h5>
                                                        <span class="text-muted">Howard@gmail.com</span>
                                                    </div>
                                                    <div class="flex-shrink-0 text-end">
                                                        <div class="dropdown align-self-start">
                                                            <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i class="bx bx-dots-vertical-rounded font-size-24 text-dark"></i>
                                                            </a>
                                                            <div class="dropdown-menu">
                                                                <a class="dropdown-item" href="#">Copy</a>
                                                                <a class="dropdown-item" href="#">Save</a>
                                                                <a class="dropdown-item" href="#">Forward</a>
                                                                <a class="dropdown-item" href="#">Delete</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <div class="d-flex align-items-center pb-4">
                                                    <div class="avatar-md me-4">
                                                        <img src="assets/images/users/avatar-6.jpg" class="img-fluid rounded-circle" alt="">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h5 class="font-size-15 mb-1"><a href="#" class="text-dark">Arthur Zurcher</a></h5>
                                                        <span class="text-muted">Arthur@gmail.com</span>
                                                    </div>
                                                    <div class="flex-shrink-0 text-end">
                                                        <div class="dropdown align-self-start">
                                                            <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i class="bx bx-dots-vertical-rounded font-size-24 text-dark"></i>
                                                            </a>
                                                            <div class="dropdown-menu">
                                                                <a class="dropdown-item" href="#">Copy</a>
                                                                <a class="dropdown-item" href="#">Save</a>
                                                                <a class="dropdown-item" href="#">Forward</a>
                                                                <a class="dropdown-item" href="#">Delete</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <div class="d-flex align-items-center pb-4">
                                                    <div class="avatar-md me-4">
                                                        <img src="assets/images/users/avatar-8.jpg" class="img-fluid rounded-circle" alt="">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h5 class="font-size-15 mb-1"><a href="#" class="text-dark">Angela Palmer</a></h5>
                                                        <span class="text-muted">Angela@gmail.com</span>
                                                    </div>
                                                    <div class="flex-shrink-0 text-end">
                                                        <div class="dropdown align-self-start">
                                                            <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i class="bx bx-dots-vertical-rounded font-size-24 text-dark"></i>
                                                            </a>
                                                            <div class="dropdown-menu">
                                                                <a class="dropdown-item" href="#">Copy</a>
                                                                <a class="dropdown-item" href="#">Save</a>
                                                                <a class="dropdown-item" href="#">Forward</a>
                                                                <a class="dropdown-item" href="#">Delete</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <div class="d-flex align-items-center pb-3">
                                                    <div class="avatar-md me-4">
                                                        <img src="assets/images/users/avatar-9.jpg" class="img-fluid rounded-circle" alt="">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h5 class="font-size-15 mb-1"><a href="#" class="text-dark">Dorothy Wimson</a></h5>
                                                        <span class="text-muted">Dorothy@gmail.com</span>
                                                    </div>
                                                    <div class="flex-shrink-0 text-end">
                                                        <div class="dropdown align-self-start">
                                                            <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i class="bx bx-dots-vertical-rounded font-size-24 text-dark"></i>
                                                            </a>
                                                            <div class="dropdown-menu">
                                                                <a class="dropdown-item" href="#">Copy</a>
                                                                <a class="dropdown-item" href="#">Save</a>
                                                                <a class="dropdown-item" href="#">Forward</a>
                                                                <a class="dropdown-item" href="#">Delete</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end card body -->
                                    </div>
                                    <!-- end card -->
                                </div>
                                <!-- end col -->
                                
                                <div class="col-xl-5">
                                    <div class="card">
                                        <div class="card-header align-items-center d-flex">
                                            <h4 class="card-title mb-0 flex-grow-1">Selling Products</h4>
                                            <div class="flex-shrink-0">
                                                <div class="dropdown align-self-start">
                                                    <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i class="bx bx-dots-horizontal-rounded font-size-18 text-dark"></i>
                                                    </a>
                                                    <div class="dropdown-menu">
                                                        <a class="dropdown-item" href="#">Copy</a>
                                                        <a class="dropdown-item" href="#">Save</a>
                                                        <a class="dropdown-item" href="#">Forward</a>
                                                        <a class="dropdown-item" href="#">Delete</a>
                                                    </div>
                                                </div>
                                            </div>
    
                                        </div><!-- end card header -->
    
                                        <div class="card-body px-0 pt-2">
                                                <div class="table-responsive px-3" data-simplebar style="max-height: 395px;">
                                                    <table class="table align-middle table-nowrap">
                                                        <tbody>
                                                            <tr>
                                                                <td style="width: 50px;">
                                                                    <div class="avatar-md me-4">
                                                                        <img src="assets/images/product/img-1.png" class="img-fluid" alt="">
                                                                    </div>
                                                                </td>
    
                                                                <td>
                                                                    <div>
                                                                        <h5 class="font-size-15"><a href="#" class="text-dark">Half sleeve T-shirt</a></h5>
                                                                        <span class="text-muted">$240.00</span>
                                                                    </div>
                                                                </td>
    
                                                                <td>
                                                                    <p class="mb-1"><a href="#" class="text-dark">Available</a></p>
                                                                    <span class="text-muted">243K</span>
                                                                </td>
    
                                                                <td>
                                                                    <div class="text-end">
                                                                        <ul class="mb-1 ps-0">
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                        </ul>
                                                                        <span class="text-muted mt-1">145 Sales</span>
                                                                    </div>
                                                                </td>
                                                            </tr>
    
                                                            <tr>
                                                                <td style="width: 50px;">
                                                                    <div class="avatar-md me-4">
                                                                        <img src="assets/images/product/img-2.png" class="img-fluid" alt="">
                                                                    </div>
                                                                </td>
    
                                                                <td>
                                                                    <div>
                                                                        <h5 class="font-size-15"><a href="#" class="text-dark">Light blue T-shirt</a></h5>
                                                                        <span class="text-muted">$650.00</span>
                                                                    </div>
                                                                </td>
    
                                                                <td>
                                                                    <p class="mb-1"><a href="#" class="text-dark">Out Of Stock</a></p>
                                                                    <span class="text-muted">1,253K</span>
                                                                </td>
    
                                                                <td>
                                                                    <div class="text-end">
                                                                        <ul class="mb-1 ps-0">
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bx-star text-warning"></li>
                                                                        </ul>
                                                                        <span class="text-muted mt-1">260 Sales</span>
                                                                    </div>
                                                                </td>
                                                            </tr>
    
                                                            <tr>
                                                                <td style="width: 50px;">
                                                                    <div class="avatar-md me-4">
                                                                        <img src="assets/images/product/img-3.png" class="img-fluid" alt="">
                                                                    </div>
                                                                </td>
    
                                                                <td>
                                                                    <div>
                                                                        <h5 class="font-size-15"><a href="#" class="text-dark">Black Color T-shirt</a></h5>
                                                                        <span class="text-muted">$325.00</span>
                                                                    </div>
                                                                </td>
    
                                                                <td>
                                                                    <p class="mb-1"><a href="#" class="text-dark">Available</a></p>
                                                                    <span class="text-muted">2,586K</span>
                                                                </td>
    
                                                                <td>
                                                                    <div class="text-end">
                                                                        <ul class="mb-1 ps-0">
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                        </ul>
                                                                        <span class="text-muted mt-1">220 Sales</span>
                                                                    </div>
                                                                </td>
                                                            </tr>
    
                                                            <tr>
                                                                <td style="width: 50px;">
                                                                    <div class="avatar-md me-4">
                                                                        <img src="assets/images/product/img-4.png" class="img-fluid" alt="">
                                                                    </div>
                                                                </td>
    
                                                                <td>
                                                                    <div>
                                                                        <h5 class="font-size-15"><a href="#" class="text-dark"></a>Hoodie (Blue)</h5>
                                                                        <span class="text-muted">$170.00</span>
                                                                    </div>
                                                                </td>
    
                                                                <td>
                                                                    <p class="mb-1"><a href="#" class="text-dark">Available</a></p>
                                                                    <span class="text-muted">4,565K</span>
                                                                </td>
    
                                                                <td>
                                                                    <div class="text-end">
                                                                        <ul class="mb-1 ps-0">
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                        </ul>
                                                                        <span class="text-muted mt-1">165 Sales</span>
                                                                    </div>
                                                                </td>
                                                            </tr>
    
                                                            <tr>
                                                                <td style="width: 50px;">
                                                                    <div class="avatar-md me-4">
                                                                        <img src="assets/images/product/img-5.png" class="img-fluid" alt="">
                                                                    </div>
                                                                </td>
    
                                                                <td>
                                                                    <div>
                                                                        <h5 class="font-size-15"><a href="#" class="text-dark"></a>Half sleeve T-Shirt</h5>
                                                                        <span class="text-muted">$150.00</span>
                                                                    </div>
                                                                </td>
    
                                                                <td>
                                                                    <p class="mb-1"><a href="#" class="text-dark">Out Of Stock</a></p>
                                                                    <span class="text-muted">5,265K</span>
                                                                </td>
    
                                                                <td>
                                                                    <div class="text-end">
                                                                        <ul class="mb-1 ps-0">
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bx-star text-warning"></li>
                                                                        </ul>
                                                                        <span class="text-muted mt-1">165 Sales</span>
                                                                    </div>
                                                                </td>
                                                            </tr>
    
                                                            <tr>
                                                                <td style="width: 50px;">
                                                                    <div class="avatar-md me-4">
                                                                        <img src="assets/images/product/img-6.png" class="img-fluid" alt="">
                                                                    </div>
                                                                </td>
    
                                                                <td>
                                                                    <div>
                                                                        <h5 class="font-size-15"><a href="#" class="text-dark"></a>Green color T-shirt</h5>
                                                                        <span class="text-muted">$120.00</span>
                                                                    </div>
                                                                </td>
    
                                                                <td>
                                                                    <p class="mb-1"><a href="#" class="text-dark">Available</a></p>
                                                                    <span class="text-muted">125K</span>
                                                                </td>
    
                                                                <td>
                                                                    <div class="text-end">
                                                                        <ul class="mb-1 ps-0">
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bxs-star text-warning"></li>
                                                                            <li class="bx bx-star text-warning"></li>
                                                                        </ul>
                                                                        <span class="text-muted mt-1">165 Sales</span>
                                                                    </div>
                                                                </td>
                                                            </tr>
    
                                                        </tbody>
                                                    </table>
                                                </div>
                                        </div>
                                        <!-- end card body -->
                                    </div>
                                    <!-- end card -->
                                </div>
                                <!-- end col -->
    
                                <div class="col-xl-4">
                                    <div class="card">
                                        <div class="card-header align-items-center d-flex">
                                            <h4 class="card-title mb-0 flex-grow-1">Chat</h4>
                                            <div class="flex-shrink-0">
                                                <select class="form-select form-select-sm mb-0 my-n1">
                                                    <option value="Today" selected="">Today</option>
                                                    <option value="Yesterday">Yesterday</option>
                                                    <option value="Week">Last Week</option>
                                                    <option value="Month">Last Month</option>
                                                </select>
                                            </div>
                                        </div><!-- end card header -->
    
                                        <div class="card-body px-0">
                                            <div class="px-3 chat-conversation" data-simplebar style="max-height: 350px;">
                                                <ul class="list-unstyled mb-0">
                                                    <li class="chat-day-title"> 
                                                        <span class="title">Today</span>
                                                    </li>
                                                    <li>
                                                        <div class="conversation-list">
                                                            <div class="d-flex">
                                                                <img src="assets/images/users/avatar-3.jpg" class="rounded-circle avatar-sm" alt="">
                                                                <div class="flex-1">
                                                                    <div class="ctext-wrap">
                                                                        <div class="ctext-wrap-content">
                                                                            <div class="conversation-name"><span class="time">10:00 AM</span></div>
                                                                            <p class="mb-0">Good Morning</p>
                                                                        </div>
                                                                        <div class="dropdown align-self-start">
                                                                            <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <i class="bx bx-dots-vertical-rounded"></i>
                                                                            </a>
                                                                            <div class="dropdown-menu">
                                                                                <a class="dropdown-item" href="#">Copy</a>
                                                                                <a class="dropdown-item" href="#">Save</a>
                                                                                <a class="dropdown-item" href="#">Forward</a>
                                                                                <a class="dropdown-item" href="#">Delete</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </li>
        
                                                    <li class="right">
                                                        <div class="conversation-list">
                                                            <div class="d-flex">
                                                                <div class="flex-1">
                                                                    <div class="ctext-wrap">
                                                                        <div class="ctext-wrap-content">
                                                                            <div class="conversation-name"><span class="time">10:02 AM</span></div>
                                                                            <p class="mb-0">Good morning</p>
                                                                        </div>
                                                                        <div class="dropdown align-self-start">
                                                                            <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <i class="bx bx-dots-vertical-rounded"></i>
                                                                            </a>
                                                                            <div class="dropdown-menu">
                                                                                <a class="dropdown-item" href="#">Copy</a>
                                                                                <a class="dropdown-item" href="#">Save</a>
                                                                                <a class="dropdown-item" href="#">Forward</a>
                                                                                <a class="dropdown-item" href="#">Delete</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <img src="assets/images/users/avatar-6.jpg" class="rounded-circle avatar-sm" alt="">
                                                            </div>
                                                            
                                                        </div>
                                                        
                                                    </li>
        
                                                    <li>
                                                        <div class="conversation-list">
                                                            <div class="d-flex">
                                                                <img src="assets/images/users/avatar-3.jpg" class="rounded-circle avatar-sm" alt="">
                                                                <div class="flex-1">
                                                                    <div class="ctext-wrap">
                                                                        <div class="ctext-wrap-content">
                                                                            <div class="conversation-name"><span class="time">10:04 AM</span></div>
                                                                            <p class="mb-0">
                                                                                Hi there, How are you?
                                                                            </p>
                                                                        </div>
                                                                        <div class="dropdown align-self-start">
                                                                            <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <i class="bx bx-dots-vertical-rounded"></i>
                                                                            </a>
                                                                            <div class="dropdown-menu">
                                                                                <a class="dropdown-item" href="#">Copy</a>
                                                                                <a class="dropdown-item" href="#">Save</a>
                                                                                <a class="dropdown-item" href="#">Forward</a>
                                                                                <a class="dropdown-item" href="#">Delete</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
        
                                                            <div class="d-flex">
                                                                <img src="assets/images/users/avatar-3.jpg" class="rounded-circle avatar-sm" alt="">
                                                                <div class="flex-1">
                                                                    <div class="ctext-wrap">
                                                                        <div class="ctext-wrap-content">
                                                                            <div class="conversation-name"><span class="time">10:04 AM</span></div>
                                                                            <p class="mb-0">
                                                                                Waiting for your reply.As I heve to go back soon. i have to travel long distance.
                                                                            </p>
                                                                        </div>
                                                                        <div class="dropdown align-self-start">
                                                                            <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <i class="bx bx-dots-vertical-rounded"></i>
                                                                            </a>
                                                                            <div class="dropdown-menu">
                                                                                <a class="dropdown-item" href="#">Copy</a>
                                                                                <a class="dropdown-item" href="#">Save</a>
                                                                                <a class="dropdown-item" href="#">Forward</a>
                                                                                <a class="dropdown-item" href="#">Delete</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </li>
        
                                                    <li class="right">
                                                        <div class="conversation-list">
                                                            <div class="d-flex">
                                                                <div class="flex-1">
                                                                    <div class="ctext-wrap">
                                                                        <div class="ctext-wrap-content">
                                                                            <div class="conversation-name"><span class="time">10:08 AM</span></div>
                                                                            <p class="mb-0">
                                                                                Hi, I am coming there in few minutes. Please wait!! I am in taxi right now.
                                                                            </p>
                                                                        </div>
                                                                        <div class="dropdown align-self-start">
                                                                            <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <i class="bx bx-dots-vertical-rounded"></i>
                                                                            </a>
                                                                            <div class="dropdown-menu">
                                                                                <a class="dropdown-item" href="#">Copy</a>
                                                                                <a class="dropdown-item" href="#">Save</a>
                                                                                <a class="dropdown-item" href="#">Forward</a>
                                                                                <a class="dropdown-item" href="#">Delete</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <img src="assets/images/users/avatar-6.jpg" class="rounded-circle avatar-sm" alt="">
                                                            </div>
                                                        </div>
                                                        
                                                    </li>
        
                                                    <li>
                                                        <div class="conversation-list">
                                                            <div class="d-flex">
                                                                <img src="assets/images/users/avatar-3.jpg" class="rounded-circle avatar-sm" alt="">
                                                                <div class="flex-1">
                                                                    <div class="ctext-wrap">
                                                                        <div class="ctext-wrap-content">
                                                                            <div class="conversation-name"><span class="time">10:06 AM</span></div>
                                                                            <p class="mb-0">
                                                                                Thank You very much, I am waiting here at StarBuck cafe.
                                                                            </p>
                                                                        </div>
                                                                        <div class="dropdown align-self-start">
                                                                            <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <i class="bx bx-dots-vertical-rounded"></i>
                                                                            </a>
                                                                            <div class="dropdown-menu">
                                                                                <a class="dropdown-item" href="#">Copy</a>
                                                                                <a class="dropdown-item" href="#">Save</a>
                                                                                <a class="dropdown-item" href="#">Forward</a>
                                                                                <a class="dropdown-item" href="#">Delete</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </li>
                                                    
        
                                                    <li>
                                                        <div class="conversation-list">
                                                            <div class="d-flex">
                                                                <img src="assets/images/users/avatar-3.jpg" class="rounded-circle avatar-sm" alt="">
                                                                <div class="flex-1">
                                                                    <div class="ctext-wrap">
                                                                        <div class="ctext-wrap-content">
                                                                            <div class="conversation-name"><span class="time">10:09 AM</span></div>
                                                                            <p class="mb-0">
                                                                                img-1.jpg & img-2.jpg images for a New Projects
                                                                            </p>
                
                                                                            <ul class="list-inline message-img mt-3  mb-0">
                                                                                <li class="list-inline-item message-img-list">
                                                                                    <a class="d-inline-block m-1" href="#">
                                                                                        <img src="assets/images/small/img-1.jpg" alt="" class="rounded img-thumbnail">
                                                                                    </a>                                                                  
                                                                                </li>
                        
                                                                                <li class="list-inline-item message-img-list">
                                                                                    <a class="d-inline-block m-1" href="#">
                                                                                        <img src="assets/images/small/img-2.jpg" alt="" class="rounded img-thumbnail">
                                                                                    </a>                                                                 
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="dropdown align-self-start">
                                                                            <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <i class="bx bx-dots-vertical-rounded"></i>
                                                                            </a>
                                                                            <div class="dropdown-menu">
                                                                                <a class="dropdown-item" href="#">Copy</a>
                                                                                <a class="dropdown-item" href="#">Save</a>
                                                                                <a class="dropdown-item" href="#">Forward</a>
                                                                                <a class="dropdown-item" href="#">Delete</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            
                                           <div class="px-3">
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="position-relative">
                                                            <input type="text" class="form-control border bg-soft-light" placeholder="Enter Message...">
                                                        </div>
                                                    </div>
                                                    <div class="col-auto">
                                                        <button type="submit" class="btn btn-primary chat-send w-md waves-effect waves-light"><span class="d-none d-sm-inline-block me-2">Send</span> <i class="mdi mdi-send float-end"></i></button>
                                                    </div>
                                                </div>
                                           </div>
                                        </div>
                                    </div>
                                    <!-- end card -->
                                </div>
                                <!-- end col -->
                            </div><!-- end row -->
    
                        </div> <!-- container-fluid -->
                    </div>
                    <!-- End Page-content -->
    
                    
                    <footer class="footer">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-sm-6">
                                    <script>document.write(new Date().getFullYear())</script> © Dason.
                                </div>
                                <div class="col-sm-6">
                                    <div class="text-sm-end d-none d-sm-block">
                                        Design & Develop by <a href="#!" class="text-decoration-underline">Themesbrand</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
                <!-- end main content-->
    
            </div>
            <!-- END layout-wrapper -->
    
            
            <!-- Right Sidebar -->
            <div class="right-bar">
                <div data-simplebar class="h-100">
                    <div class="rightbar-title d-flex align-items-center bg-dark p-3">
    
                        <h5 class="m-0 me-2 text-white">Theme Customizer</h5>
    
                        <a href="javascript:void(0);" class="right-bar-toggle ms-auto">
                            <i class="mdi mdi-close noti-icon"></i>
                        </a>
                    </div>
    
                    <!-- Settings -->
                    <hr class="m-0" />
    
                    <div class="p-4">
                        <h6 class="mb-3">Layout</h6>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="layout"
                                id="layout-vertical" value="vertical">
                            <label class="form-check-label" for="layout-vertical">Vertical</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="layout"
                                id="layout-horizontal" value="horizontal">
                            <label class="form-check-label" for="layout-horizontal">Horizontal</label>
                        </div>
    
                        <h6 class="mt-4 mb-3 pt-2">Layout Mode</h6>
    
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="layout-mode"
                                id="layout-mode-light" value="light">
                            <label class="form-check-label" for="layout-mode-light">Light</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="layout-mode"
                                id="layout-mode-dark" value="dark">
                            <label class="form-check-label" for="layout-mode-dark">Dark</label>
                        </div>
    
                        <h6 class="mt-4 mb-3 pt-2">Layout Width</h6>
    
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="layout-width"
                                id="layout-width-fuild" value="fuild" onchange="document.body.setAttribute('data-layout-size', 'fluid')">
                            <label class="form-check-label" for="layout-width-fuild">Fluid</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="layout-width"
                                id="layout-width-boxed" value="boxed" onchange="document.body.setAttribute('data-layout-size', 'boxed'),document.body.setAttribute('data-sidebar-size', 'sm')">
                            <label class="form-check-label" for="layout-width-boxed">Boxed</label>
                        </div>
    
                        <h6 class="mt-4 mb-3 pt-2">Layout Position</h6>
    
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="layout-position"
                                id="layout-position-fixed" value="fixed" onchange="document.body.setAttribute('data-layout-scrollable', 'false')">
                            <label class="form-check-label" for="layout-position-fixed">Fixed</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="layout-position"
                                id="layout-position-scrollable" value="scrollable" onchange="document.body.setAttribute('data-layout-scrollable', 'true')">
                            <label class="form-check-label" for="layout-position-scrollable">Scrollable</label>
                        </div>
    
                        <h6 class="mt-4 mb-3 pt-2">Topbar Color</h6>
    
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="topbar-color"
                                id="topbar-color-light" value="light" onchange="document.body.setAttribute('data-topbar', 'light')">
                            <label class="form-check-label" for="topbar-color-light">Light</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="topbar-color"
                                id="topbar-color-dark" value="dark" onchange="document.body.setAttribute('data-topbar', 'dark')">
                            <label class="form-check-label" for="topbar-color-dark">Dark</label>
                        </div>
    
                        <h6 class="mt-4 mb-3 pt-2 sidebar-setting">Sidebar Size</h6>
    
                        <div class="form-check sidebar-setting">
                            <input class="form-check-input" type="radio" name="sidebar-size"
                                id="sidebar-size-default" value="default" onchange="document.body.setAttribute('data-sidebar-size', 'lg')">
                            <label class="form-check-label" for="sidebar-size-default">Default</label>
                        </div>
                        <div class="form-check sidebar-setting">
                            <input class="form-check-input" type="radio" name="sidebar-size"
                                id="sidebar-size-compact" value="compact" onchange="document.body.setAttribute('data-sidebar-size', 'md')">
                            <label class="form-check-label" for="sidebar-size-compact">Compact</label>
                        </div>
                        <div class="form-check sidebar-setting">
                            <input class="form-check-input" type="radio" name="sidebar-size"
                                id="sidebar-size-small" value="small" onchange="document.body.setAttribute('data-sidebar-size', 'sm')">
                            <label class="form-check-label" for="sidebar-size-small">Small (Icon View)</label>
                        </div>
    
                        <h6 class="mt-4 mb-3 pt-2 sidebar-setting">Sidebar Color</h6>
    
                        <div class="form-check sidebar-setting">
                            <input class="form-check-input" type="radio" name="sidebar-color"
                                id="sidebar-color-light" value="light" onchange="document.body.setAttribute('data-sidebar', 'light')">
                            <label class="form-check-label" for="sidebar-color-light">Light</label>
                        </div>
                        <div class="form-check sidebar-setting">
                            <input class="form-check-input" type="radio" name="sidebar-color"
                                id="sidebar-color-dark" value="dark" onchange="document.body.setAttribute('data-sidebar', 'dark')">
                            <label class="form-check-label" for="sidebar-color-dark">Dark</label>
                        </div>
                        <div class="form-check sidebar-setting">
                            <input class="form-check-input" type="radio" name="sidebar-color"
                                id="sidebar-color-brand" value="brand" onchange="document.body.setAttribute('data-sidebar', 'brand')">
                            <label class="form-check-label" for="sidebar-color-brand">Brand</label>
                        </div>
    
                        <h6 class="mt-4 mb-3 pt-2">Direction</h6>
    
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="layout-direction"
                                id="layout-direction-ltr" value="ltr">
                            <label class="form-check-label" for="layout-direction-ltr">LTR</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="layout-direction"
                                id="layout-direction-rtl" value="rtl">
                            <label class="form-check-label" for="layout-direction-rtl">RTL</label>
                        </div>
    
                    </div>
    
                </div> <!-- end slimscroll-menu-->
            </div>
            <!-- /Right-bar -->
    
            <!-- Right bar overlay-->
            <div class="rightbar-overlay"></div>
    
            <!-- JAVASCRIPT -->
            <script src="assets/libs/jquery/jquery.min.js"></script>
            <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/libs/metismenu/metisMenu.min.js"></script>
            <script src="assets/libs/simplebar/simplebar.min.js"></script>
            <script src="assets/libs/node-waves/waves.min.js"></script>
            <script src="assets/libs/feather-icons/feather.min.js"></script>
            <!-- pace js -->
            <script src="assets/libs/pace-js/pace.min.js"></script>
    
            <!-- apexcharts -->
            <script src="assets/libs/apexcharts/apexcharts.min.js"></script>
    
            <!-- Plugins js-->
            <script src="assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.min.js"></script>
            <script src="assets/libs/admin-resources/jquery.vectormap/maps/jquery-jvectormap-world-mill-en.js"></script>
            <!-- dashboard init -->
            <script src="assets/js/pages/dashboard.init.js"></script>
    
            <script src="assets/js/app.js"></script>
    
        </body>
    
    <!-- Mirrored from themesdesign.in/dason-django/layouts/default/layouts-horizontal.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 27 Jan 2023 11:02:10 GMT -->
    </html>
    
</div>
