
<!DOCTYPE html>
<html lang="en">

	<meta http-equiv="content-type" content="text/html;charset=UTF-8"/>
	<head>
		<title>Moçambique API</title>

		<!-- Meta -->
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="shortcut icon" href="assets/icon.png">

		<!-- Google Font -->
		<link
			href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&amp;display=swap"
			rel="stylesheet">

		<!-- FontAwesome JS-->
		<script defer src="assets/fontawesome/js/all.min.js"></script>

		<!-- Plugins CSS -->
		<link rel="stylesheet"
			href="assets/highlight.js/9.15.2/styles/atom-one-dark.min.css">
		<link rel="stylesheet"
			href="assets/plugins/simplelightbox/simple-lightbox.min.css">

		<!-- Theme CSS -->
		<link id="theme-style" rel="stylesheet" href="assets/css/theme.css">
		<link id="theme-style" rel="stylesheet" href="assets/css/estilo.css">

	</head>

	<body class="docs-page" class="position-relative">
		<header class="header fixed-top">
			<div class="branding docs-branding">
				<div class="container-fluid position-relative py-2">
					<div class="docs-logo-wrapper">
						<button id="docs-sidebar-toggler" class="docs-sidebar-toggler
							docs-sidebar-visible me-2 d-xl-none" type="button">
							<span></span>
							<span></span>
							<span></span>
						</button>
						<div class="site-logo"><a class="navbar-brand" href="docs.html"><img
									class="logo-icon me-2" src="assets/icon.png" alt="logo"><span
									class="logo-text">Moçambique<span class="text-alt"> API</span></span></a></div>
					</div><!--//docs-logo-wrapper-->
					<div class="docs-top-utilities d-flex justify-content-end
						align-items-center">
						<div class="top-search-box d-none d-lg-flex">
							<form class="search-form">
								<input type="search" placeholder="Search the docs..." name="search"
									class="form-control ">
							</form>
						</div>

						<ul class="social-list list-inline mx-md-3 mx-lg-5 mb-0 d-none d-lg-flex">
							<li class="list-inline-item"><a href="#"><i class="fab fa-github fa-fw"></i></a></li>
							<li class="list-inline-item"><a href="#"><i class="fab fa-twitter fa-fw"></i></a></li>
						</ul><!--//social-list-->
						<a href="" class="btn btn-primary d-none d-lg-flex">Suporte</a>
					</div><!--//docs-top-utilities-->
				</div><!--//container-->
			</div><!--//branding-->
		</header><!--//header-->

		<div class="docs-wrapper container">
			<div id="docs-sidebar" class="docs-sidebar">
				<div class="top-search-box d-lg-none p-3">
					<form class="search-form">
						<input type="text" placeholder="Search the docs..." name="search"
							class="form-control ">
						<button type="submit" class="btn search-btn" value="Search"><i class="fas
								fa-trash"></i></button>
					</form>
				</div>
				<nav id="docs-nav" class="docs-nav navbar">
					<ul class="section-items list-unstyled nav flex-column pb-3">
						<li class="nav-item section-title"><a class="nav-link scrollto active"
								href="#section-1"><span class="theme-icon-holder me-2"><i class="fas
										fa-map-signs"></i></span>Introdução</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-1-1">Bancos</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-1-2">Taxaas</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-1-3">Impostos</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-1-4">feriados Nacionais</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-1-5">Taxa de câmbio do BNA</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-1-6">Taxa de inflação</a></li>
						<li class="nav-item section-title mt-3"><a class="nav-link scrollto"
								href="#section-2"><span class="theme-icon-holder me-2"><i class="fas
										fa-arrow-down"></i></span>Taxas bancárias</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-2-1">Taxa de Juros do BNA</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-2-2">Taxas de câmbio no BNA;</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-2-3">Taxas de câmbio nos bancos comerciais</a></li>
						<li class="nav-item section-title mt-3"><a class="nav-link scrollto"
								href="#section-3"><span class="theme-icon-holder me-2"><i class="fas
										fa-box"></i></span>Regiões</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-3-1">Províncias</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-3-2">Municípios</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-3-3">Cidades</a></li>
						<li class="nav-item section-title mt-3"><a class="nav-link scrollto"
								href="#section-4"><span class="theme-icon-holder me-2"><i class="fas
										fa-cogs"></i></span>Validações</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-4-1">Bilhete de Identidade</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-4-2">Passaporte</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-4-3">Telefone</a></li>
						<li class="nav-item section-title mt-3"><a class="nav-link scrollto"
								href="#section-5"><span class="theme-icon-holder me-2"><i class="fas
										fa-tools"></i></span>Utilities</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-5-1">Section
								Item 5.1</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-5-2">Section
								Item 5.2</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-5-3">Section
								Item 5.3</a></li>
						<li class="nav-item section-title mt-3"><a class="nav-link scrollto"
								href="#section-6"><span class="theme-icon-holder me-2"><i class="fas
										fa-laptop-code"></i></span>Web</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-6-1">Section
								Item 6.1</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-6-2">Section
								Item 6.2</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-6-3">Section
								Item 6.3</a></li>
						<li class="nav-item section-title mt-3"><a class="nav-link scrollto"
								href="#section-7"><span class="theme-icon-holder me-2"><i class="fas
										fa-tablet-alt"></i></span>Mobile</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-7-1">Section
								Item 7.1</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-7-2">Section
								Item 7.2</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-7-3">Section
								Item 7.3</a></li>
						<li class="nav-item section-title mt-3"><a class="nav-link scrollto"
								href="#section-8"><span class="theme-icon-holder me-2"><i class="fas
										fa-book-reader"></i></span>Resources</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-8-1">Section
								Item 8.1</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-8-2">Section
								Item 8.2</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-8-3">Section
								Item 8.3</a></li>
						<li class="nav-item section-title mt-3"><a class="nav-link scrollto"
								href="#section-9"><span class="theme-icon-holder me-2"><i class="fas
										fa-lightbulb"></i></span>FAQs</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-9-1">Section
								Item 9.1</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-9-2">Section
								Item 9.2</a></li>
						<li class="nav-item"><a class="nav-link scrollto" href="#item-9-3">Section
								Item 9.3</a></li>
					</ul>

				</nav><!--//docs-nav-->
			</div><!--//docs-sidebar-->
			<div class="docs-content">
				<div class="container">
					<article class="docs-article" id="section-1">
						<header class="docs-header">
							<h1 class="docs-heading">Introdução <span class="docs-time">Last
									updated: 2019-06-01</span></h1>
							<section class="docs-intro">
								<p>Moçambique API é uma api que fornece informações bancárias de Banco Nacional de Moçambique, informações regionais,Taxas bancarias, validações nacionais,feriados Nacionais entre outras.</p>
							</section><!--//docs-intro-->

							<h5>Github Code Example: <code class="bg-success text-white">GET/docs/v01/cidades</code></h5>
							<div class="docs-code-block">
								<pre class="shadow-lg rounded"><code class="json hljs">[
  {
    <span class="hljs-attr">"title"</span>: <span class="hljs-string">"apples"</span>,
    <span class="hljs-attr">"count"</span>: [<span class="hljs-number">12000</span>, <span class="hljs-number">20000</span>],
    <span class="hljs-attr">"description"</span>: {<span class="hljs-attr">"text"</span>: <span class="hljs-string">"..."</span>, <span class="hljs-attr">"sensitive"</span>: <span class="hljs-literal">false</span>}
  },
  {
    <span class="hljs-attr">"title"</span>: <span class="hljs-string">"oranges"</span>,
    <span class="hljs-attr">"title"</span>: <span class="hljs-string">"oranges"</span>,
    <span class="hljs-attr">"count"</span>: [<span class="hljs-number">17500</span>, <span class="hljs-literal">null</span>],
    <span class="hljs-attr">"description"</span>: {<span class="hljs-attr">"text"</span>: <span class="hljs-string">"..."</span>, <span class="hljs-attr">"sensitive"</span>: <span class="hljs-literal">false</span>}
  }
]


</code></pre>
							</div><!--//docs-code-block-->


						</header>
						<section class="docs-section" id="item-1-1">
							<div class="row">
								<div class="col">
									<h2 class="section-heading">Cidades</h2>
									<div class="callout-block callout-block-info">
										<div class="content">
											<h4 class="callout-title">
												<span class="callout-icon-holder me-1">
													<i class="fas fa-info-circle"></i>
												</span>
												<code><code>https::/mocambiqueApi/docs/v01/cicades</code> </code>
												<!-- <code><code>&lt;GET&gt;</code> </code> -->
											</h4>
										</div>
									</div>
									<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum
										condimentum mauris, vitae facilisis leo. Aliquam sagittis purus nisi,
										at commodo augue convallis id. </p>
									<p>Code Example: <code>npm install &lt;package&gt;</code></p>
									<h5>Unordered List Examples:</h5>
									<ul>
										<li><strong class="me-1">HTML5:</strong> <code>&lt;div id="foo"&gt;</code></li>
										<li><strong class="me-1">CSS:</strong> <code>#foo { color: red }</code></li>
										<li><strong class="me-1">JavaScript:</strong> <code>console.log(&#x27;#foo\bar&#x27;);</code></li>
									</ul>
								</div>

								<div class="col">
									<h5>Github Code Example: <code class="bg-success text-white">GET/docs/v01/cidades</code></h5>
									<div class="docs-code-block">
										<pre class="shadow-lg rounded"><code class="json hljs">[
  {
    <span class="hljs-attr">"title"</span>: <span class="hljs-string">"apples"</span>,
    <span class="hljs-attr">"count"</span>: [<span class="hljs-number">12000</span>, <span class="hljs-number">20000</span>],
    <span class="hljs-attr">"description"</span>: {<span class="hljs-attr">"text"</span>: <span class="hljs-string">"..."</span>, <span class="hljs-attr">"sensitive"</span>: <span class="hljs-literal">false</span>}
  },
  {
    <span class="hljs-attr">"title"</span>: <span class="hljs-string">"oranges"</span>,
    <span class="hljs-attr">"title"</span>: <span class="hljs-string">"oranges"</span>,
    <span class="hljs-attr">"count"</span>: [<span class="hljs-number">17500</span>, <span class="hljs-literal">null</span>],
    <span class="hljs-attr">"description"</span>: {<span class="hljs-attr">"text"</span>: <span class="hljs-string">"..."</span>, <span class="hljs-attr">"sensitive"</span>: <span class="hljs-literal">false</span>}
  }
]


</code></pre>
									</div>
								</div>
									<Strong class="me-1">Response</Strong>
									<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item ">
    <h2 class="accordion-header" id="flush-headingOne">

		<button  class="accordion-button bg-primary collapse-white text-white collapsed" type="button" data-bs-toggle="collapse"       data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        200 sucessos
      </button>

    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button bg-danger text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       400 code Invalido
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
       404 nao encontrado
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingfoo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefoo" aria-expanded="false" aria-controls="flush-collapsefoo">
       500 todos os servicos de retornaram erros
      </button>
    </h2>
    <div id="flush-collapsefoo" class="accordion-collapse collapse" aria-labelledby="flush-headingfoo" data-bs-parent="#accordionfooExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
									



							</section><!--//section-->

							<section class="docs-section" id="item-1-2">
								<h2 class="section-heading">Section Item 1.2</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->

							<section class="docs-section" id="item-1-3">
								<h2 class="section-heading">Section Item 1.3</h2>

							</section><!--//section-->

							<section class="docs-section" id="item-1-4">
								<h2 class="section-heading">Section Item 1.4</h2>


							</section><!--//section-->
							<section class="docs-section" id="item-1-5">
								<h2 class="section-heading">Section Item 1.5</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->
							<section class="docs-section" id="item-1-6">
								<h2 class="section-heading">Section Item 1.6</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->

						</article>

						<article class="docs-article" id="section-2">
							<header class="docs-header">
								<h1 class="docs-heading">Validações</h1>
								<section class="docs-intro">
									<p>Section intro goes here. Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Quisque finibus condimentum nisl id vulputate.
										Praesent aliquet varius eros interdum suscipit. Donec eu purus sed
										nibh convallis bibendum quis vitae turpis. Duis vestibulum diam lorem,
										vitae dapibus nibh facilisis a. Fusce in malesuada odio.</p>
								</section><!--//docs-intro-->
							</header>
							<section class="docs-section" id="item-2-1">
								<h2 class="section-heading">Section Item 2.1</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->

							<section class="docs-section" id="item-2-2">
								<h2 class="section-heading">Section Item 2.2</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->

							<section class="docs-section" id="item-2-3">
								<h2 class="section-heading">Section Item 2.3</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->
						</article><!--//docs-article-->


						<article class="docs-article" id="section-3">
							<header class="docs-header">
								<h1 class="docs-heading">APIs</h1>
								<section class="docs-intro">
									<p>Section intro goes here. Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Quisque finibus condimentum nisl id vulputate.
										Praesent aliquet varius eros interdum suscipit. Donec eu purus sed
										nibh convallis bibendum quis vitae turpis. Duis vestibulum diam lorem,
										vitae dapibus nibh facilisis a. Fusce in malesuada odio.</p>
								</section><!--//docs-intro-->
							</header>
							<section class="docs-section" id="item-3-1">
								<h2 class="section-heading">Section Item 3.1</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->

							<section class="docs-section" id="item-3-2">
								<h2 class="section-heading">Section Item 3.2</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->

							<section class="docs-section" id="item-3-3">
								<h2 class="section-heading">Section Item 3.3</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->
						</article><!--//docs-article-->

						<article class="docs-article" id="section-4">
							<header class="docs-header">
								<h1 class="docs-heading">Intergrations</h1>
								<section class="docs-intro">
									<p>Section intro goes here. Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Quisque finibus condimentum nisl id vulputate.
										Praesent aliquet varius eros interdum suscipit. Donec eu purus sed
										nibh convallis bibendum quis vitae turpis. Duis vestibulum diam lorem,
										vitae dapibus nibh facilisis a. Fusce in malesuada odio.</p>
								</section><!--//docs-intro-->
							</header>
							<section class="docs-section" id="item-4-1">
								<h2 class="section-heading">Section Item 4.1</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->

							<section class="docs-section" id="item-4-2">
								<h2 class="section-heading">Section Item 4.2</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->

							<section class="docs-section" id="item-4-3">
								<h2 class="section-heading">Section Item 4.3</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->
						</article><!--//docs-article-->

						<article class="docs-article" id="section-5">
							<header class="docs-header">
								<h1 class="docs-heading">Utilities</h1>
								<section class="docs-intro">
									<p>Section intro goes here. Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Quisque finibus condimentum nisl id vulputate.
										Praesent aliquet varius eros interdum suscipit. Donec eu purus sed
										nibh convallis bibendum quis vitae turpis. Duis vestibulum diam lorem,
										vitae dapibus nibh facilisis a. Fusce in malesuada odio.</p>
								</section><!--//docs-intro-->
							</header>
							<section class="docs-section" id="item-5-1">
								<h2 class="section-heading">Section Item 5.1</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->

							<section class="docs-section" id="item-5-2">
								<h2 class="section-heading">Section Item 5.2</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->

							<section class="docs-section" id="item-5-3">
								<h2 class="section-heading">Section Item 5.3</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->
						</article><!--//docs-article-->


						<article class="docs-article" id="section-6">
							<header class="docs-header">
								<h1 class="docs-heading">Web</h1>
								<section class="docs-intro">
									<p>Section intro goes here. Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Quisque finibus condimentum nisl id vulputate.
										Praesent aliquet varius eros interdum suscipit. Donec eu purus sed
										nibh convallis bibendum quis vitae turpis. Duis vestibulum diam lorem,
										vitae dapibus nibh facilisis a. Fusce in malesuada odio.</p>
								</section><!--//docs-intro-->
							</header>
							<section class="docs-section" id="item-6-1">
								<h2 class="section-heading">Section Item 6.1</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->

							<section class="docs-section" id="item-6-2">
								<h2 class="section-heading">Section Item 6.2</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->

							<section class="docs-section" id="item-6-3">
								<h2 class="section-heading">Section Item 6.3</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->
						</article><!--//docs-article-->


						<article class="docs-article" id="section-7">
							<header class="docs-header">
								<h1 class="docs-heading">Mobile</h1>
								<section class="docs-intro">
									<p>Section intro goes here. Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Quisque finibus condimentum nisl id vulputate.
										Praesent aliquet varius eros interdum suscipit. Donec eu purus sed
										nibh convallis bibendum quis vitae turpis. Duis vestibulum diam lorem,
										vitae dapibus nibh facilisis a. Fusce in malesuada odio.</p>
								</section><!--//docs-intro-->
							</header>
							<section class="docs-section" id="item-7-1">
								<h2 class="section-heading">Section Item 7.1</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->

							<section class="docs-section" id="item-7-2">
								<h2 class="section-heading">Section Item 7.2</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->

							<section class="docs-section" id="item-7-3">
								<h2 class="section-heading">Section Item 7.3</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->
						</article><!--//docs-article-->


						<article class="docs-article" id="section-8">
							<header class="docs-header">
								<h1 class="docs-heading">Resources</h1>
								<section class="docs-intro">
									<p>Section intro goes here. Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Quisque finibus condimentum nisl id vulputate.
										Praesent aliquet varius eros interdum suscipit. Donec eu purus sed
										nibh convallis bibendum quis vitae turpis. Duis vestibulum diam lorem,
										vitae dapibus nibh facilisis a. Fusce in malesuada odio.</p>
								</section><!--//docs-intro-->
							</header>
							<section class="docs-section" id="item-8-1">
								<h2 class="section-heading">Section Item 8.1</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->

							<section class="docs-section" id="item-8-2">
								<h2 class="section-heading">Section Item 8.2</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->

							<section class="docs-section" id="item-8-3">
								<h2 class="section-heading">Section Item 8.3</h2>
								<p>Vivamus efficitur fringilla ullamcorper. Cras condimentum condimentum
									mauris, vitae facilisis leo. Aliquam sagittis purus nisi, at commodo
									augue convallis id. Sed interdum turpis quis felis bibendum imperdiet.
									Mauris pellentesque urna eu leo gravida iaculis. In fringilla odio in
									felis ultricies porttitor. Donec at purus libero. Vestibulum libero
									orci, commodo nec arcu sit amet, commodo sollicitudin est. Vestibulum
									ultricies malesuada tempor.</p>
							</section><!--//section-->
						</article><!--//docs-article-->


						<article class="docs-article" id="section-9">
							<header class="docs-header">
								<h1 class="docs-heading">FAQs</h1>
								<section class="docs-intro">
									<p>Section intro goes here. You can list all your FAQs using the format
										below.</p>
								</section><!--//docs-intro-->
							</header>
							<section class="docs-section" id="item-9-1">
								<h2 class="section-heading">Section Item 9.1 <small>(FAQ Category One)</small></h2>
								<h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>What's sit
									amet quam eget lacinia?</h5>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
									commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
									et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
									felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
									consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
									nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
									venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
								<h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>How to ipsum
									dolor sit amet quam tortor?</h5>
								<p>Donec sodales sagittis magna. Sed consequat, leo eget bibendum
									sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce
									vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut,
									mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. </p>
								<h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>Can I
									bibendum sodales?</h5>
								<p>Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque
									ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. </p>
								<h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>Where arcu
									sed urna gravida?</h5>
								<p>Aenean et sodales nisi, vel efficitur sapien. Quisque molestie diam
									libero, et elementum diam mollis ac. In dignissim aliquam est eget
									ullamcorper. Sed id sodales tortor, eu finibus leo. Vivamus dapibus
									sollicitudin justo vel fermentum. Curabitur nec arcu sed urna gravida
									lobortis. Donec lectus est, imperdiet eu viverra viverra, ultricies nec
									urna. </p>
							</section><!--//section-->

							<section class="docs-section" id="item-9-2">
								<h2 class="section-heading">Section Item 9.2 <small>(FAQ Category Two)</small></h2>
								<h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>What's sit
									amet quam eget lacinia?</h5>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
									commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
									et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
									felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
									consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
									nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
									venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
								<h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>How to ipsum
									dolor sit amet quam tortor?</h5>
								<p>Donec sodales sagittis magna. Sed consequat, leo eget bibendum
									sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce
									vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut,
									mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. </p>
								<h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>Can I
									bibendum sodales?</h5>
								<p>Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque
									ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. </p>
								<h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>Where arcu
									sed urna gravida?</h5>
								<p>Aenean et sodales nisi, vel efficitur sapien. Quisque molestie diam
									libero, et elementum diam mollis ac. In dignissim aliquam est eget
									ullamcorper. Sed id sodales tortor, eu finibus leo. Vivamus dapibus
									sollicitudin justo vel fermentum. Curabitur nec arcu sed urna gravida
									lobortis. Donec lectus est, imperdiet eu viverra viverra, ultricies nec
									urna. </p>
							</section><!--//section-->

							<section class="docs-section" id="item-9-3">
								<h2 class="section-heading">Section Item 9.3 <small>(FAQ Category Three)</small></h2>
								<h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>How to
									dapibus sollicitudin justo vel fermentum?</h5>
								<p>Donec sodales sagittis magna. Sed consequat, leo eget bibendum
									sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce
									vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut,
									mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. </p>
								<h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>How long
									bibendum sodales?</h5>
								<p>Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque
									ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. </p>
								<h5 class="pt-3"><i class="fas fa-question-circle me-1"></i>Where
									dapibus sollicitudin?</h5>
								<p>Aenean et sodales nisi, vel efficitur sapien. Quisque molestie diam
									libero, et elementum diam mollis ac. In dignissim aliquam est eget
									ullamcorper. Sed id sodales tortor, eu finibus leo. Vivamus dapibus
									sollicitudin justo vel fermentum. Curabitur nec arcu sed urna gravida
									lobortis. Donec lectus est, imperdiet eu viverra viverra, ultricies nec
									urna. </p>
							</section><!--//section-->
						</article><!--//docs-article-->

						<footer class="footer">
							<div class="container text-center py-5">
								<small class="copyright">Template Copyright &copy; <a
										href="https://themes.3rdwavemedia.com/" target="_blank">3rd Wave Media</a></small>
								<ul class="social-list list-unstyled pt-4 mb-0">
									<li class="list-inline-item"><a href="#"><i class="fab fa-github
												fa-fw"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fab fa-twitter
												fa-fw"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fab fa-slack fa-fw"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fab fa-product-hunt
												fa-fw"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f
												fa-fw"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fab fa-instagram
												fa-fw"></i></a></li>
								</ul><!--//social-list-->
							</div>
						</footer>
					</div>
				</div>
			</div><!--//docs-wrapper-->


			<!-- Javascript -->
			<script src="assets/plugins/popper.min.js"></script>
			<script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
			<script src="assets/highlight.js/9.15.8/highlight.min.js"></script>
			<!-- Page Specific JS -->
			<script src="assets/plugins/smoothscroll.min.js"></script>
			<script src="assets/js/highlight.min.js"></script>
			<script src="assets/js/highlight-custom.js"></script>
			<script src="assets/plugins/simplelightbox/simple-lightbox.min.js"></script>
			<script src="assets/plugins/gumshoe/gumshoe.polyfills.min.js"></script>
			<script src="assets/js/docs.js"></script>

		</body>

	</html>
