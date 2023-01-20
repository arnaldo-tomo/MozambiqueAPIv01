<!DOCTYPE html>
<html lang="en">
<!-- Mirrored from protocol.tailwindui.com/messages by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 19 Jan 2023 12:39:52 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->

<head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Recursos</title>
    <meta name="description"
        content="On this page, we’ll dive into the different message endpoints you can use to manage messages programmatically." />
    <meta name="next-head-count" content="4" />
    <script>
        let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
</script>
<link rel="preload" href="_next/static/css/5973ac107865555a.css" as="style" />
<link rel="stylesheet" href="_next/static/css/5973ac107865555a.css" data-n-g="" /><noscript data-n-css=""></noscript>
<script defer="" nomodule="" src="_next/static/chunks/polyfills-c67a75d1b6f99dc8.js"></script>
<script src="_next/static/chunks/webpack-59c5c889f52620d6.js" defer=""></script>
<script src="_next/static/chunks/framework-3b5a00d5d7e8d93b.js" defer=""></script>
<script src="_next/static/chunks/main-1f2538228a1f74e7.js" defer=""></script>
<script src="_next/static/chunks/pages/_app-8345f5f9c4ee5ac7.js" defer=""></script>
<script src="_next/static/chunks/pages/messages-bf0acd0cb29ee5f7.js" defer=""></script>
{{-- <script src="_next/static/WA_UIYXxpLGp_ZNykk82c/_buildManifest.js" defer=""></script> --}}
{{-- <script src="_next/static/WA_UIYXxpLGp_ZNykk82c/_ssgManifest.js" defer=""></script> --}}
</head>

<body class="bg-white antialiased dark:bg-zinc-900">
    <div id="__next">
        <div class="lg:ml-72 xl:ml-80">
            <header class="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
                <div
                    class="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pt-4 lg:pb-8 lg:dark:border-white/10 xl:w-80">
                    <div class="hidden lg:flex"><a aria-label="Home" href="index.html"><svg viewBox="0 0 99 24"
                                aria-hidden="true" class="h-6">
                                <path class="fill-emerald-400"
                                    d="M16 8a5 5 0 0 0-5-5H5a5 5 0 0 0-5 5v13.927a1 1 0 0 0 1.623.782l3.684-2.93a4 4 0 0 1 2.49-.87H11a5 5 0 0 0 5-5V8Z">
                                </path>
                                <path class="fill-zinc-900 dark:fill-white"
                                    d="M26.538 18h2.654v-3.999h2.576c2.672 0 4.456-1.723 4.456-4.333V9.65c0-2.61-1.784-4.333-4.456-4.333h-5.23V18Zm4.58-10.582c1.52 0 2.416.8 2.416 2.241v.018c0 1.441-.896 2.25-2.417 2.25h-1.925V7.418h1.925ZM38.051 18h2.566v-5.414c0-1.371.923-2.206 2.382-2.206.396 0 .791.061 1.178.15V8.287a3.843 3.843 0 0 0-.958-.123c-1.257 0-2.136.615-2.443 1.661h-.159V8.323h-2.566V18Zm11.55.202c2.979 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.773-5.036-2.953 0-4.772 1.916-4.772 5.036v.018c0 3.146 1.793 5.036 4.772 5.036Zm0-2.013c-1.372 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.144-3.023 1.354 0 2.145 1.134 2.145 3.023v.018c0 1.907-.782 3.023-2.145 3.023Zm10.52 1.846c.492 0 .967-.053 1.283-.114v-1.907a6.057 6.057 0 0 1-.755.044c-.87 0-1.24-.387-1.24-1.257v-4.544h1.995V8.323H59.41V6.012h-2.592v2.311h-1.495v1.934h1.495v5.133c0 1.88.949 2.645 3.304 2.645Zm7.287.167c2.98 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.772-5.036-2.954 0-4.773 1.916-4.773 5.036v.018c0 3.146 1.793 5.036 4.773 5.036Zm0-2.013c-1.372 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.145-3.023 1.353 0 2.144 1.134 2.144 3.023v.018c0 1.907-.782 3.023-2.144 3.023Zm10.767 2.013c2.522 0 4.034-1.353 4.297-3.463l.01-.053h-2.374l-.017.036c-.229.966-.853 1.467-1.908 1.467-1.37 0-2.135-1.08-2.135-3.04v-.018c0-1.934.755-3.006 2.135-3.006 1.099 0 1.74.615 1.908 1.556l.008.017h2.391v-.026c-.228-2.162-1.749-3.56-4.315-3.56-3.033 0-4.738 1.837-4.738 5.019v.017c0 3.217 1.714 5.054 4.738 5.054Zm10.257 0c2.98 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.772-5.036-2.953 0-4.773 1.916-4.773 5.036v.018c0 3.146 1.793 5.036 4.773 5.036Zm0-2.013c-1.371 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.145-3.023 1.353 0 2.144 1.134 2.144 3.023v.018c0 1.907-.782 3.023-2.144 3.023ZM95.025 18h2.566V4.623h-2.566V18Z">
                                </path>
                            </svg></a></div>
                    <div class="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80 backdrop-blur-sm dark:backdrop-blur lg:left-72 xl:left-80 bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]"
                        style="--bg-opacity-light:0.5;--bg-opacity-dark:0.2">
                        <div class="absolute inset-x-0 top-full h-px transition bg-zinc-900/7.5 dark:bg-white/7.5">
                        </div>
                        <div class="hidden lg:block lg:max-w-md lg:flex-auto"><button type="button"
                                class="hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex focus:[&amp;:not(:focus-visible)]:outline-none"><svg
                                    viewBox="0 0 20 20" fill="none" aria-hidden="true" class="h-5 w-5 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25">
                                    </path>
                                </svg>Find something...<kbd
                                    class="ml-auto text-2xs text-zinc-400 dark:text-zinc-500"><kbd
                                        class="font-sans"></kbd><kbd class="font-sans">K</kbd></kbd></button></div>
                        <div class="flex items-center gap-5 lg:hidden"><button type="button"
                                class="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
                                aria-label="Toggle navigation"><svg viewBox="0 0 10 9" fill="none"
                                    stroke-linecap="round" aria-hidden="true"
                                    class="w-2.5 stroke-zinc-900 dark:stroke-white">
                                    <path d="M.5 1h9M.5 8h9M.5 4.5h9"></path>
                                </svg></button><a aria-label="Home" href="index.html"><svg viewBox="0 0 99 24"
                                    aria-hidden="true" class="h-6">
                                    <path class="fill-emerald-400"
                                        d="M16 8a5 5 0 0 0-5-5H5a5 5 0 0 0-5 5v13.927a1 1 0 0 0 1.623.782l3.684-2.93a4 4 0 0 1 2.49-.87H11a5 5 0 0 0 5-5V8Z">
                                    </path>
                                    <path class="fill-zinc-900 dark:fill-white"
                                        d="M26.538 18h2.654v-3.999h2.576c2.672 0 4.456-1.723 4.456-4.333V9.65c0-2.61-1.784-4.333-4.456-4.333h-5.23V18Zm4.58-10.582c1.52 0 2.416.8 2.416 2.241v.018c0 1.441-.896 2.25-2.417 2.25h-1.925V7.418h1.925ZM38.051 18h2.566v-5.414c0-1.371.923-2.206 2.382-2.206.396 0 .791.061 1.178.15V8.287a3.843 3.843 0 0 0-.958-.123c-1.257 0-2.136.615-2.443 1.661h-.159V8.323h-2.566V18Zm11.55.202c2.979 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.773-5.036-2.953 0-4.772 1.916-4.772 5.036v.018c0 3.146 1.793 5.036 4.772 5.036Zm0-2.013c-1.372 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.144-3.023 1.354 0 2.145 1.134 2.145 3.023v.018c0 1.907-.782 3.023-2.145 3.023Zm10.52 1.846c.492 0 .967-.053 1.283-.114v-1.907a6.057 6.057 0 0 1-.755.044c-.87 0-1.24-.387-1.24-1.257v-4.544h1.995V8.323H59.41V6.012h-2.592v2.311h-1.495v1.934h1.495v5.133c0 1.88.949 2.645 3.304 2.645Zm7.287.167c2.98 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.772-5.036-2.954 0-4.773 1.916-4.773 5.036v.018c0 3.146 1.793 5.036 4.773 5.036Zm0-2.013c-1.372 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.145-3.023 1.353 0 2.144 1.134 2.144 3.023v.018c0 1.907-.782 3.023-2.144 3.023Zm10.767 2.013c2.522 0 4.034-1.353 4.297-3.463l.01-.053h-2.374l-.017.036c-.229.966-.853 1.467-1.908 1.467-1.37 0-2.135-1.08-2.135-3.04v-.018c0-1.934.755-3.006 2.135-3.006 1.099 0 1.74.615 1.908 1.556l.008.017h2.391v-.026c-.228-2.162-1.749-3.56-4.315-3.56-3.033 0-4.738 1.837-4.738 5.019v.017c0 3.217 1.714 5.054 4.738 5.054Zm10.257 0c2.98 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.772-5.036-2.953 0-4.773 1.916-4.773 5.036v.018c0 3.146 1.793 5.036 4.773 5.036Zm0-2.013c-1.371 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.145-3.023 1.353 0 2.144 1.134 2.144 3.023v.018c0 1.907-.782 3.023-2.144 3.023ZM95.025 18h2.566V4.623h-2.566V18Z">
                                    </path>
                                </svg></a></div>
                        <div class="flex items-center gap-5">
                            <nav class="hidden md:block">
                                <ul role="list" class="flex items-center gap-8">
                                    <li><a class="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                            href="index.html">API</a></li>
                                    <li><a class="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                            href="messages#">Documentation</a></li>
                                    <li><a class="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                            href="messages#">Support</a></li>
                                </ul>
                            </nav>
                            <div class="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"></div>
                            <div class="flex gap-4">
                                <div class="contents lg:hidden"><button type="button"
                                        class="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden focus:[&amp;:not(:focus-visible)]:outline-none"
                                        aria-label="Find something..."><svg viewBox="0 0 20 20" fill="none"
                                            aria-hidden="true" class="h-5 w-5 stroke-zinc-900 dark:stroke-white">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25">
                                            </path>
                                        </svg></button></div><button type="button"
                                    class="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
                                    aria-label="Toggle dark mode"><svg viewBox="0 0 20 20" fill="none"
                                        aria-hidden="true" class="h-5 w-5 stroke-zinc-900 dark:hidden">
                                        <path d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
                                        <path stroke-linecap="round"
                                            d="M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707">
                                        </path>
                                    </svg><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"
                                        class="hidden h-5 w-5 stroke-white dark:block">
                                        <path d="M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z">
                                        </path>
                                    </svg></button>
                            </div>
                            <div class="hidden min-[416px]:contents"><a
                                    class="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-1 dark:ring-inset dark:ring-emerald-400/20 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300 dark:hover:ring-emerald-300"
                                    href="messages#">Sign in</a></div>
                        </div>
                    </div>
                    <nav class="hidden lg:mt-10 lg:block">
                        <ul role="list">
                            <li class="md:hidden"><a
                                    class="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                    href="index.html">API</a></li>
                            <li class="md:hidden"><a
                                    class="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                    href="messages#">Documentation</a></li>
                            <li class="md:hidden"><a
                                    class="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                    href="messages#">Support</a></li>
                            <li class="relative mt-6 md:mt-0">
                                <h2 class="text-xs font-semibold text-zinc-900 dark:text-white">Guides</h2>
                                <div class="relative mt-3 pl-2">
                                    <div class="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
                                    <ul role="list" class="border-l border-transparent">
                                        <li class="relative"><a
                                                class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                href="index.html"><span class="truncate">Introduction</span></a></li>
                                        <li class="relative"><a
                                                class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                href="quickstart"><span class="truncate">Quickstart</span></a></li>
                                        <li class="relative"><a
                                                class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                href="sdks"><span class="truncate">SDKs</span></a></li>
                                        <li class="relative"><a
                                                class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                href="authentication"><span class="truncate">Authentication</span></a>
                                        </li>
                                        <li class="relative"><a
                                                class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                href="pagination"><span class="truncate">Pagination</span></a></li>
                                        <li class="relative"><a
                                                class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                href="errors"><span class="truncate">Errors</span></a></li>
                                        <li class="relative"><a
                                                class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                href="webhooks"><span class="truncate">Webhooks</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="relative mt-6">
                                <h2 class="text-xs font-semibold text-zinc-900 dark:text-white">Resources</h2>
                                <div class="relative mt-3 pl-2">
                                    <div class="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"
                                        style="border-radius:8px;height:32px;top:64px;opacity:0"></div>
                                    <div class="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
                                    <div class="absolute left-2 h-6 w-px bg-emerald-500" style="top:68px;opacity:1">
                                    </div>
                                    <ul role="list" class="border-l border-transparent">
                                        <li class="relative"><a
                                                class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                href="contacts"><span class="truncate">Contacts</span></a></li>
                                        <li class="relative"><a
                                                class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                href="conversations"><span class="truncate">Conversations</span></a>
                                        </li>
                                        <li class="relative"><a aria-current="page"
                                                class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-900 dark:text-white"
                                                href="messages"><span class="truncate">Messages</span></a>
                                            <ul role="list" style="opacity:1">
                                                <li><a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                        href="messages#the-message-model"><span class="truncate">The
                                                            message model</span></a></li>
                                                <li><a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                        href="messages#list-all-messages"><span class="truncate">List
                                                            all messages</span><span
                                                            class="font-mono text-[0.625rem] font-semibold leading-6 text-zinc-400 dark:text-zinc-500">GET</span></a>
                                                </li>
                                                <li><a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                        href="messages#send-a-message"><span class="truncate">Send a
                                                            message</span><span
                                                            class="font-mono text-[0.625rem] font-semibold leading-6 text-zinc-400 dark:text-zinc-500">POST</span></a>
                                                </li>
                                                <li><a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                        href="messages#retrieve-a-message"><span
                                                            class="truncate">Retrieve a message</span><span
                                                            class="font-mono text-[0.625rem] font-semibold leading-6 text-zinc-400 dark:text-zinc-500">GET</span></a>
                                                </li>
                                                <li><a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                        href="messages#update-a-message"><span class="truncate">Update a
                                                            message</span><span
                                                            class="font-mono text-[0.625rem] font-semibold leading-6 text-zinc-400 dark:text-zinc-500">PUT</span></a>
                                                </li>
                                                <li><a class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                        href="messages#delete-a-message"><span class="truncate">Delete a
                                                            message</span><span
                                                            class="font-mono text-[0.625rem] font-semibold leading-6 text-zinc-400 dark:text-zinc-500">DELETE</span></a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="relative"><a
                                                class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                href="groups"><span class="truncate">Groups</span></a></li>
                                        <li class="relative"><a
                                                class="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                href="attachments"><span class="truncate">Attachments</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="sticky bottom-0 z-10 mt-6 min-[416px]:hidden"><a
                                    class="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-400 w-full"
                                    href="messages#">Sign in</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div class="relative px-4 pt-14 sm:px-6 lg:px-8">
                <main class="py-16">
                    <article class="prose dark:prose-invert">



                        <div class="my-6">

                            <div class="flex items-center gap-x-3"><span
                                    class="font-mono text-[0.625rem] font-semibold leading-6 rounded-lg px-1.5 ring-1 ring-inset ring-emerald-300 dark:ring-emerald-400/30 bg-emerald-400/10 text-emerald-500 dark:text-emerald-400">GET</span><span
                                    class="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span><span
                                    class="font-mono text-xs text-zinc-400">/v1/messages</span></div>
                            <h2 id="list-all-messages" class="mt-2 scroll-mt-32"><a
                                    class="group text-inherit no-underline hover:text-inherit"
                                    href="messages#list-all-messages">List all messages</a></h2>
                            <div class="grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">
                                <div class="[&amp;&gt;:first-child]:mt-0 [&amp;&gt;:last-child]:mb-0">
                                    <p>This endpoint allows you to retrieve a paginated list of all your messages (in a
                                        conversation if a conversation id is provided). By default, a maximum of ten
                                        messages are shown per page.</p>
                                    <h3>Optional attributes</h3>
                                    <div class="my-6">
                                        <ul role="list"
                                            class="m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5">
                                            <li class="m-0 px-0 py-4 first:pt-0 last:pb-0">
                                                <dl class="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
                                                    <dt class="sr-only">Name</dt>
                                                    <dd><code>conversation_id</code></dd>
                                                    <dt class="sr-only">Type</dt>
                                                    <dd class="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                                                        string
                                                    </dd>
                                                    <dt class="sr-only">Description</dt>
                                                    <dd
                                                        class="w-full flex-none [&amp;&gt;:first-child]:mt-0 [&amp;&gt;:last-child]:mb-0">
                                                        <p>Limit to messages from a given conversation.</p>
                                                    </dd>
                                                </dl>
                                            </li>
                                            <li class="m-0 px-0 py-4 first:pt-0 last:pb-0">
                                                <dl class="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
                                                    <dt class="sr-only">Name</dt>
                                                    <dd><code>limit</code></dd>
                                                    <dt class="sr-only">Type</dt>
                                                    <dd class="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                                                        integer
                                                    </dd>
                                                    <dt class="sr-only">Description</dt>
                                                    <dd
                                                        class="w-full flex-none [&amp;&gt;:first-child]:mt-0 [&amp;&gt;:last-child]:mb-0">
                                                        <p>Limit the number of messages returned.</p>
                                                    </dd>
                                                </dl>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    class="[&amp;&gt;:first-child]:mt-0 [&amp;&gt;:last-child]:mb-0 xl:sticky xl:top-24">
                                    <button type="button" aria-hidden="true"
                                        style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"></button>
                                    <div
                                        class="not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
                                        <div
                                            class="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
                                            <h3 class="mr-auto pt-3 text-xs font-semibold text-white">Request</h3>
                                            <div class="-mb-px flex gap-4 text-xs font-medium" role="tablist"
                                                aria-orientation="horizontal"><button
                                                    class="border-b py-3 transition focus:[&amp;:not(:focus-visible)]:outline-none border-emerald-500 text-emerald-400"
                                                    id="headlessui-tabs-tab-:R36chd6:" role="tab" type="button"
                                                    aria-selected="true" tabindex="0"
                                                    data-headlessui-state="selected">cURL</button><button
                                                    class="border-b py-3 transition focus:[&amp;:not(:focus-visible)]:outline-none border-transparent text-zinc-400 hover:text-zinc-300"
                                                    id="headlessui-tabs-tab-:R56chd6:" role="tab" type="button"
                                                    aria-selected="false" tabindex="-1"
                                                    data-headlessui-state="">JavaScript</button></div>
                                        </div>
                                        <div>
                                            <div id="headlessui-tabs-panel-:Rqchd6:" role="tabpanel" tabindex="0"
                                                data-headlessui-state="selected">
                                                <div class="group dark:bg-white/2.5">
                                                    <div
                                                        class="flex h-9 items-center gap-2 border-y border-t-transparent border-b-white/7.5 bg-zinc-900 bg-white/2.5 px-4 dark:border-b-white/5 dark:bg-white/1">
                                                        <div class="dark flex"><span
                                                                class="font-mono text-[0.625rem] font-semibold leading-6 text-emerald-500 dark:text-emerald-400">GET</span>
                                                        </div><span
                                                            class="h-0.5 w-0.5 rounded-full bg-zinc-500"></span><span
                                                            class="font-mono text-xs text-zinc-400">/v1/messages</span>
                                                    </div>
                                                    <div class="relative">
                                                        <pre class="overflow-x-auto p-4 text-xs text-white"><code class="language-bash"><span><span style="color: var(--shiki-color-text)">curl -G https://api.protocol.chat/v1/messages \</span></span>
<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span><span style="color: var(--shiki-color-text)"> \</span></span>
<span><span style="color: var(--shiki-color-text)"> -d conversation_id=xgQQXg3hrtjh7AvZ \</span></span>
<span><span style="color: var(--shiki-color-text)">  -d limit=10</span></span>
<span></span></code></pre><button type="button"
    class="group/button absolute top-3.5 right-4 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"><span
        aria-hidden="false"
        class="pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300"><svg
            viewBox="0 0 20 20" aria-hidden="true"
            class="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400">
            <path stroke-width="0"
                d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z">
            </path>
            <path fill="none" stroke-linejoin="round"
                d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1">
            </path>
        </svg>Copy</span><span aria-hidden="true"
        class="pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300 translate-y-1.5 opacity-0">Copied!</span></button>
</div>
</div>
</div><span id="headlessui-tabs-panel-:R1achd6:" role="tabpanel" tabindex="-1"
    style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"></span><span
    id="headlessui-tabs-panel-:R1qchd6:" role="tabpanel" tabindex="-1"
    style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"></span><span
    id="headlessui-tabs-panel-:R2achd6:" role="tabpanel" tabindex="-1"
    style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"></span>
</div>
</div>
<div class="not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
    <div
        class="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
        <h3 class="mr-auto pt-3 text-xs font-semibold text-white">Response</h3>
    </div>
    <div class="group dark:bg-white/2.5">
        <div class="relative">
            <pre class="overflow-x-auto p-4 text-xs text-white"><code class="language-json"><span><span style="color: var(--shiki-color-text)">{</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;has_more&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;data&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>
<span><span style="color: var(--shiki-color-text)">    {</span></span>
<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;SIuAFUNKdSYHZF2w&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;conversation_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;contact&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;WAz8eIbvDR60rouK&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;KevinMcCallister&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;phone_number&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;1-800-759-3000&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;avatar_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://assets.protocol.chat/avatars/buzzboy.jpg&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;last_active_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>
<span><span style="color: var(--shiki-color-text)">      }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;message&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;It’s a nice night for a neck injury.&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;reactions&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;attachments&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;read_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;updated_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>
<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">    {</span></span>
<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;hSIhXBhNe8X1d8Et&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// ..</span></span>
<span><span style="color: var(--shiki-color-text)">    }</span></span>
<span><span style="color: var(--shiki-color-text)">  ]</span></span>
<span><span style="color: var(--shiki-color-text)">}</span></span>
<span></span></code></pre><button type="button"
                class="group/button absolute top-3.5 right-4 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"><span
                    aria-hidden="false"
                    class="pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300"><svg
                        viewBox="0 0 20 20" aria-hidden="true"
                        class="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400">
                        <path stroke-width="0"
                            d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z">
                        </path>
                        <path fill="none" stroke-linejoin="round"
                            d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1">
                        </path>
                    </svg>Copy</span><span aria-hidden="true"
                    class="pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300 translate-y-1.5 opacity-0">Copied!</span></button>
        </div>
    </div>
</div>
</div>
</div>
<hr />
<div class="flex items-center gap-x-3"><span
        class="font-mono text-[0.625rem] font-semibold leading-6 rounded-lg px-1.5 ring-1 ring-inset ring-sky-300 bg-sky-400/10 text-sky-500 dark:ring-sky-400/30 dark:bg-sky-400/10 dark:text-sky-400">POST</span><span
        class="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span><span
        class="font-mono text-xs text-zinc-400">/v1/messages</span></div>
<h2 id="send-a-message" class="mt-2 scroll-mt-32"><a class="group text-inherit no-underline hover:text-inherit"
        href="messages#send-a-message">Send a message</a></h2>
<div class="grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">
    <div class="[&amp;&gt;:first-child]:mt-0 [&amp;&gt;:last-child]:mb-0">
        <p>This endpoint allows you to send a new message to one of your conversations.</p>
        <h3>Required attributes</h3>
        <div class="my-6">
            <ul role="list"
                class="m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5">
                <li class="m-0 px-0 py-4 first:pt-0 last:pb-0">
                    <dl class="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
                        <dt class="sr-only">Name</dt>
                        <dd><code>conversation_id</code></dd>
                        <dt class="sr-only">Type</dt>
                        <dd class="font-mono text-xs text-zinc-400 dark:text-zinc-500">string
                        </dd>
                        <dt class="sr-only">Description</dt>
                        <dd class="w-full flex-none [&amp;&gt;:first-child]:mt-0 [&amp;&gt;:last-child]:mb-0">
                            <p>Unique identifier for the conversation the message belongs to.
                            </p>
                        </dd>
                    </dl>
                </li>
                <li class="m-0 px-0 py-4 first:pt-0 last:pb-0">
                    <dl class="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
                        <dt class="sr-only">Name</dt>
                        <dd><code>message</code></dd>
                        <dt class="sr-only">Type</dt>
                        <dd class="font-mono text-xs text-zinc-400 dark:text-zinc-500">string
                        </dd>
                        <dt class="sr-only">Description</dt>
                        <dd class="w-full flex-none [&amp;&gt;:first-child]:mt-0 [&amp;&gt;:last-child]:mb-0">
                            <p>The message content.</p>
                        </dd>
                    </dl>
                </li>
            </ul>
        </div>
        <h3>Optional attributes</h3>
        <div class="my-6">
            <ul role="list"
                class="m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5">
                <li class="m-0 px-0 py-4 first:pt-0 last:pb-0">
                    <dl class="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
                        <dt class="sr-only">Name</dt>
                        <dd><code>attachments</code></dd>
                        <dt class="sr-only">Type</dt>
                        <dd class="font-mono text-xs text-zinc-400 dark:text-zinc-500">array
                        </dd>
                        <dt class="sr-only">Description</dt>
                        <dd class="w-full flex-none [&amp;&gt;:first-child]:mt-0 [&amp;&gt;:last-child]:mb-0">
                            <p>An array of attachment objects associated with the message.</p>
                        </dd>
                    </dl>
                </li>
            </ul>
        </div>
    </div>
    <div class="[&amp;&gt;:first-child]:mt-0 [&amp;&gt;:last-child]:mb-0 xl:sticky xl:top-24">
        <button type="button" aria-hidden="true"
            style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"></button>
        <div class="not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
            <div
                class="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
                <h3 class="mr-auto pt-3 text-xs font-semibold text-white">Request</h3>
                <div class="-mb-px flex gap-4 text-xs font-medium" role="tablist" aria-orientation="horizontal"><button
                        class="border-b py-3 transition focus:[&amp;:not(:focus-visible)]:outline-none border-emerald-500 text-emerald-400"
                        id="headlessui-tabs-tab-:R36cnd6:" role="tab" type="button" aria-selected="true" tabindex="0"
                        data-headlessui-state="selected">cURL</button><button
                        class="border-b py-3 transition focus:[&amp;:not(:focus-visible)]:outline-none border-transparent text-zinc-400 hover:text-zinc-300"
                        id="headlessui-tabs-tab-:R56cnd6:" role="tab" type="button" aria-selected="false" tabindex="-1"
                        data-headlessui-state="">JavaScript</button><button
                        class="border-b py-3 transition focus:[&amp;:not(:focus-visible)]:outline-none border-transparent text-zinc-400 hover:text-zinc-300"
                        id="headlessui-tabs-tab-:R76cnd6:" role="tab" type="button" aria-selected="false" tabindex="-1"
                        data-headlessui-state="">Python</button><button
                        class="border-b py-3 transition focus:[&amp;:not(:focus-visible)]:outline-none border-transparent text-zinc-400 hover:text-zinc-300"
                        id="headlessui-tabs-tab-:R96cnd6:" role="tab" type="button" aria-selected="false" tabindex="-1"
                        data-headlessui-state="">PHP</button></div>
            </div>
            <div>
                <div id="headlessui-tabs-panel-:Rqcnd6:" role="tabpanel" tabindex="0" data-headlessui-state="selected">
                    <div class="group dark:bg-white/2.5">
                        <div
                            class="flex h-9 items-center gap-2 border-y border-t-transparent border-b-white/7.5 bg-zinc-900 bg-white/2.5 px-4 dark:border-b-white/5 dark:bg-white/1">
                            <div class="dark flex"><span
                                    class="font-mono text-[0.625rem] font-semibold leading-6 text-sky-500">POST</span>
                            </div><span class="h-0.5 w-0.5 rounded-full bg-zinc-500"></span><span
                                class="font-mono text-xs text-zinc-400">/v1/messages</span>
                        </div>
                        <div class="relative">
                            <pre class="overflow-x-auto p-4 text-xs text-white"><code class="language-bash"><span><span style="color: var(--shiki-color-text)">curl https://api.protocol.chat/v1/messages \</span></span>
<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span><span style="color: var(--shiki-color-text)"> \</span></span>
<span><span style="color: var(--shiki-color-text)">  -d conversation_id=</span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-color-text)"> \</span></span>
<span><span style="color: var(--shiki-color-text)">  -d message=</span><span style="color: var(--shiki-token-string-expression)">&quot;You’re what the French call ‘les incompetents.’&quot;</span></span>
<span></span></code></pre><button type="button"
                                class="group/button absolute top-3.5 right-4 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"><span
                                    aria-hidden="false"
                                    class="pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300"><svg
                                        viewBox="0 0 20 20" aria-hidden="true"
                                        class="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400">
                                        <path stroke-width="0"
                                            d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z">
                                        </path>
                                        <path fill="none" stroke-linejoin="round"
                                            d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1">
                                        </path>
                                    </svg>Copy</span><span aria-hidden="true"
                                    class="pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300 translate-y-1.5 opacity-0">Copied!</span></button>
                        </div>
                    </div>
                </div><span id="headlessui-tabs-panel-:R1acnd6:" role="tabpanel" tabindex="-1"
                    style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"></span><span
                    id="headlessui-tabs-panel-:R1qcnd6:" role="tabpanel" tabindex="-1"
                    style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"></span><span
                    id="headlessui-tabs-panel-:R2acnd6:" role="tabpanel" tabindex="-1"
                    style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"></span>
            </div>
        </div>
        <div class="not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
            <div
                class="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
                <h3 class="mr-auto pt-3 text-xs font-semibold text-white">Response</h3>
            </div>
            <div class="group dark:bg-white/2.5">
                <div class="relative">
                    <pre class="overflow-x-auto p-4 text-xs text-white"><code class="language-json"><span><span style="color: var(--shiki-color-text)">{</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;gWqY86BMFRiH5o11&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;conversation_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;contact&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;inEIRvzjC6YLMX3o&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;LinnieMcCallister&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;phone_number&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;1-800-759-3000&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;avatar_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://assets.protocol.chat/avatars/linnie.jpg&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;last_active_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>
<span><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;message&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;You’re what the French call ‘les incompetents.’&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;reactions&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;attachments&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;read_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;updated_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span></span>
<span><span style="color: var(--shiki-color-text)">}</span></span>
<span></span></code></pre><button type="button"
                        class="group/button absolute top-3.5 right-4 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"><span
                            aria-hidden="false"
                            class="pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300"><svg
                                viewBox="0 0 20 20" aria-hidden="true"
                                class="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400">
                                <path stroke-width="0"
                                    d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z">
                                </path>
                                <path fill="none" stroke-linejoin="round"
                                    d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1">
                                </path>
                            </svg>Copy</span><span aria-hidden="true"
                            class="pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300 translate-y-1.5 opacity-0">Copied!</span></button>
                </div>
            </div>
        </div>
    </div>
</div>
<hr />
<div class="flex items-center gap-x-3"><span
        class="font-mono text-[0.625rem] font-semibold leading-6 rounded-lg px-1.5 ring-1 ring-inset ring-emerald-300 dark:ring-emerald-400/30 bg-emerald-400/10 text-emerald-500 dark:text-emerald-400">GET</span><span
        class="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span><span
        class="font-mono text-xs text-zinc-400">/v1/messages/:id</span></div>
<h2 id="retrieve-a-message" class="mt-2 scroll-mt-32"><a class="group text-inherit no-underline hover:text-inherit"
        href="messages#retrieve-a-message">Retrieve a message</a></h2>
<div class="grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">
    <div class="[&amp;&gt;:first-child]:mt-0 [&amp;&gt;:last-child]:mb-0">
        <p>This endpoint allows you to retrieve a message by providing the message id. Refer to
            <a href="messages#the-message-model">the list</a> at the top of this page to see
            which properties are included with message objects.
        </p>
    </div>
    <div class="[&amp;&gt;:first-child]:mt-0 [&amp;&gt;:last-child]:mb-0 xl:sticky xl:top-24">
        <button type="button" aria-hidden="true"
            style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"></button>
        <div class="not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
            <div
                class="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
                <h3 class="mr-auto pt-3 text-xs font-semibold text-white">Request</h3>
                <div class="-mb-px flex gap-4 text-xs font-medium" role="tablist" aria-orientation="horizontal"><button
                        class="border-b py-3 transition focus:[&amp;:not(:focus-visible)]:outline-none border-emerald-500 text-emerald-400"
                        id="headlessui-tabs-tab-:R36ctd6:" role="tab" type="button" aria-selected="true" tabindex="0"
                        data-headlessui-state="selected">cURL</button><button
                        class="border-b py-3 transition focus:[&amp;:not(:focus-visible)]:outline-none border-transparent text-zinc-400 hover:text-zinc-300"
                        id="headlessui-tabs-tab-:R56ctd6:" role="tab" type="button" aria-selected="false" tabindex="-1"
                        data-headlessui-state="">JavaScript</button><button
                        class="border-b py-3 transition focus:[&amp;:not(:focus-visible)]:outline-none border-transparent text-zinc-400 hover:text-zinc-300"
                        id="headlessui-tabs-tab-:R76ctd6:" role="tab" type="button" aria-selected="false" tabindex="-1"
                        data-headlessui-state="">Python</button><button
                        class="border-b py-3 transition focus:[&amp;:not(:focus-visible)]:outline-none border-transparent text-zinc-400 hover:text-zinc-300"
                        id="headlessui-tabs-tab-:R96ctd6:" role="tab" type="button" aria-selected="false" tabindex="-1"
                        data-headlessui-state="">PHP</button></div>
            </div>
            <div>
                <div id="headlessui-tabs-panel-:Rqctd6:" role="tabpanel" tabindex="0" data-headlessui-state="selected">
                    <div class="group dark:bg-white/2.5">
                        <div
                            class="flex h-9 items-center gap-2 border-y border-t-transparent border-b-white/7.5 bg-zinc-900 bg-white/2.5 px-4 dark:border-b-white/5 dark:bg-white/1">
                            <div class="dark flex"><span
                                    class="font-mono text-[0.625rem] font-semibold leading-6 text-emerald-500 dark:text-emerald-400">GET</span>
                            </div><span class="h-0.5 w-0.5 rounded-full bg-zinc-500"></span><span
                                class="font-mono text-xs text-zinc-400">/v1/messages/SIuAFUNKdSYHZF2w</span>
                        </div>
                        <div class="relative">
                            <pre class="overflow-x-auto p-4 text-xs text-white"><code class="language-bash"><span><span style="color: var(--shiki-color-text)">curl https://api.protocol.chat/v1/messages/SIuAFUNKdSYHZF2w \</span></span>
<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span></span>
<span></span></code></pre><button type="button"
                                class="group/button absolute top-3.5 right-4 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"><span
                                    aria-hidden="false"
                                    class="pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300"><svg
                                        viewBox="0 0 20 20" aria-hidden="true"
                                        class="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400">
                                        <path stroke-width="0"
                                            d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z">
                                        </path>
                                        <path fill="none" stroke-linejoin="round"
                                            d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1">
                                        </path>
                                    </svg>Copy</span><span aria-hidden="true"
                                    class="pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300 translate-y-1.5 opacity-0">Copied!</span></button>
                        </div>
                    </div>
                </div><span id="headlessui-tabs-panel-:R1actd6:" role="tabpanel" tabindex="-1"
                    style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"></span><span
                    id="headlessui-tabs-panel-:R1qctd6:" role="tabpanel" tabindex="-1"
                    style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"></span><span
                    id="headlessui-tabs-panel-:R2actd6:" role="tabpanel" tabindex="-1"
                    style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"></span>
            </div>
        </div>
        <div class="not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
            <div
                class="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
                <h3 class="mr-auto pt-3 text-xs font-semibold text-white">Response</h3>
            </div>
            <div class="group dark:bg-white/2.5">
                <div class="relative">
                    <pre class="overflow-x-auto p-4 text-xs text-white"><code class="language-json"><span><span style="color: var(--shiki-color-text)">{</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;SIuAFUNKdSYHZF2w&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;conversation_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;contact&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;WAz8eIbvDR60rouK&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;KevinMcCallister&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;phone_number&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;1-800-759-3000&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;avatar_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://assets.protocol.chat/avatars/kevin.jpg&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;last_active_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>
<span><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;message&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;I’m traveling with my dad. He’s at a meeting. I hate meetings.&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;reactions&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;attachments&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;read_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;updated_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>
<span><span style="color: var(--shiki-color-text)">}</span></span>
<span></span></code></pre><button type="button"
                        class="group/button absolute top-3.5 right-4 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"><span
                            aria-hidden="false"
                            class="pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300"><svg
                                viewBox="0 0 20 20" aria-hidden="true"
                                class="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400">
                                <path stroke-width="0"
                                    d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z">
                                </path>
                                <path fill="none" stroke-linejoin="round"
                                    d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1">
                                </path>
                            </svg>Copy</span><span aria-hidden="true"
                            class="pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300 translate-y-1.5 opacity-0">Copied!</span></button>
                </div>
            </div>
        </div>
    </div>
</div>
<hr />
<div class="flex items-center gap-x-3"><span
        class="font-mono text-[0.625rem] font-semibold leading-6 rounded-lg px-1.5 ring-1 ring-inset ring-amber-300 bg-amber-400/10 text-amber-500 dark:ring-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400">PUT</span><span
        class="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span><span
        class="font-mono text-xs text-zinc-400">/v1/messages/:id</span></div>
<h2 id="update-a-message" class="mt-2 scroll-mt-32"><a class="group text-inherit no-underline hover:text-inherit"
        href="messages#update-a-message">Update a message</a></h2>
<div class="grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">
    <div class="[&amp;&gt;:first-child]:mt-0 [&amp;&gt;:last-child]:mb-0">
        <p>This endpoint allows you to perform an update on a message. Examples of updates are
            adding a reaction, editing the message, or adding an attachment.</p>
        <h3>Optional attributes</h3>
        <div class="my-6">
            <ul role="list"
                class="m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5">
                <li class="m-0 px-0 py-4 first:pt-0 last:pb-0">
                    <dl class="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
                        <dt class="sr-only">Name</dt>
                        <dd><code>message</code></dd>
                        <dt class="sr-only">Type</dt>
                        <dd class="font-mono text-xs text-zinc-400 dark:text-zinc-500">string
                        </dd>
                        <dt class="sr-only">Description</dt>
                        <dd class="w-full flex-none [&amp;&gt;:first-child]:mt-0 [&amp;&gt;:last-child]:mb-0">
                            <p>The message content.</p>
                        </dd>
                    </dl>
                </li>
                <li class="m-0 px-0 py-4 first:pt-0 last:pb-0">
                    <dl class="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
                        <dt class="sr-only">Name</dt>
                        <dd><code>reactions</code></dd>
                        <dt class="sr-only">Type</dt>
                        <dd class="font-mono text-xs text-zinc-400 dark:text-zinc-500">array
                        </dd>
                        <dt class="sr-only">Description</dt>
                        <dd class="w-full flex-none [&amp;&gt;:first-child]:mt-0 [&amp;&gt;:last-child]:mb-0">
                            <p>An array of reaction objects associated with the message.</p>
                        </dd>
                    </dl>
                </li>
                <li class="m-0 px-0 py-4 first:pt-0 last:pb-0">
                    <dl class="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
                        <dt class="sr-only">Name</dt>
                        <dd><code>attachments</code></dd>
                        <dt class="sr-only">Type</dt>
                        <dd class="font-mono text-xs text-zinc-400 dark:text-zinc-500">array
                        </dd>
                        <dt class="sr-only">Description</dt>
                        <dd class="w-full flex-none [&amp;&gt;:first-child]:mt-0 [&amp;&gt;:last-child]:mb-0">
                            <p>An array of attachment objects associated with the message.</p>
                        </dd>
                    </dl>
                </li>
            </ul>
        </div>
    </div>
    <div class="[&amp;&gt;:first-child]:mt-0 [&amp;&gt;:last-child]:mb-0 xl:sticky xl:top-24">
        <button type="button" aria-hidden="true"
            style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"></button>
        <div class="not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
            <div
                class="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
                <h3 class="mr-auto pt-3 text-xs font-semibold text-white">Request</h3>
                <div class="-mb-px flex gap-4 text-xs font-medium" role="tablist" aria-orientation="horizontal"><button
                        class="border-b py-3 transition focus:[&amp;:not(:focus-visible)]:outline-none border-emerald-500 text-emerald-400"
                        id="headlessui-tabs-tab-:R36d3d6:" role="tab" type="button" aria-selected="true" tabindex="0"
                        data-headlessui-state="selected">cURL</button><button
                        class="border-b py-3 transition focus:[&amp;:not(:focus-visible)]:outline-none border-transparent text-zinc-400 hover:text-zinc-300"
                        id="headlessui-tabs-tab-:R56d3d6:" role="tab" type="button" aria-selected="false" tabindex="-1"
                        data-headlessui-state="">JavaScript</button><button
                        class="border-b py-3 transition focus:[&amp;:not(:focus-visible)]:outline-none border-transparent text-zinc-400 hover:text-zinc-300"
                        id="headlessui-tabs-tab-:R76d3d6:" role="tab" type="button" aria-selected="false" tabindex="-1"
                        data-headlessui-state="">Python</button><button
                        class="border-b py-3 transition focus:[&amp;:not(:focus-visible)]:outline-none border-transparent text-zinc-400 hover:text-zinc-300"
                        id="headlessui-tabs-tab-:R96d3d6:" role="tab" type="button" aria-selected="false" tabindex="-1"
                        data-headlessui-state="">PHP</button></div>
            </div>
            <div>
                <div id="headlessui-tabs-panel-:Rqd3d6:" role="tabpanel" tabindex="0" data-headlessui-state="selected">
                    <div class="group dark:bg-white/2.5">
                        <div
                            class="flex h-9 items-center gap-2 border-y border-t-transparent border-b-white/7.5 bg-zinc-900 bg-white/2.5 px-4 dark:border-b-white/5 dark:bg-white/1">
                            <div class="dark flex"><span
                                    class="font-mono text-[0.625rem] font-semibold leading-6 text-amber-500">PUT</span>
                            </div><span class="h-0.5 w-0.5 rounded-full bg-zinc-500"></span><span
                                class="font-mono text-xs text-zinc-400">/v1/messages/SIuAFUNKdSYHZF2w</span>
                        </div>
                        <div class="relative">
                            <pre class="overflow-x-auto p-4 text-xs text-white"><code class="language-bash"><span><span style="color: var(--shiki-color-text)">curl -X PUT https://api.protocol.chat/v1/messages/SIuAFUNKdSYHZF2w \</span></span>
<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span><span style="color: var(--shiki-color-text)"> \</span></span>
<span><span style="color: var(--shiki-color-text)">  -d reactions[red_angry_face][]=</span><span style="color: var(--shiki-token-string-expression)">&quot;KateMcCallister&quot;</span></span>
<span></span></code></pre><button type="button"
                                class="group/button absolute top-3.5 right-4 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"><span
                                    aria-hidden="false"
                                    class="pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300"><svg
                                        viewBox="0 0 20 20" aria-hidden="true"
                                        class="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400">
                                        <path stroke-width="0"
                                            d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z">
                                        </path>
                                        <path fill="none" stroke-linejoin="round"
                                            d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1">
                                        </path>
                                    </svg>Copy</span><span aria-hidden="true"
                                    class="pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300 translate-y-1.5 opacity-0">Copied!</span></button>
                        </div>
                    </div>
                </div><span id="headlessui-tabs-panel-:R1ad3d6:" role="tabpanel" tabindex="-1"
                    style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"></span><span
                    id="headlessui-tabs-panel-:R1qd3d6:" role="tabpanel" tabindex="-1"
                    style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"></span><span
                    id="headlessui-tabs-panel-:R2ad3d6:" role="tabpanel" tabindex="-1"
                    style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"></span>
            </div>
        </div>
        <div class="not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
            <div
                class="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
                <h3 class="mr-auto pt-3 text-xs font-semibold text-white">Response</h3>
            </div>
            <div class="group dark:bg-white/2.5">
                <div class="relative">
                    <pre class="overflow-x-auto p-4 text-xs text-white"><code class="language-json"><span><span style="color: var(--shiki-color-text)">{</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;SIuAFUNKdSYHZF2w&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;conversation_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;contact&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;WAz8eIbvDR60rouK&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;KevinMcCallister&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;phone_number&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;1-800-759-3000&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;avatar_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://assets.protocol.chat/avatars/buzzboy.jpg&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;last_active_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>
<span><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;message&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;I&#39;m not apologizing. I&#39;d rather kiss a toilet seat.&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;reactions&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>
<span><span style="color: var(--shiki-color-text)">    {</span></span>
<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;red_angry_face&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>
<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-string-expression)">&quot;KateMcCallister&quot;</span></span>
<span><span style="color: var(--shiki-color-text)">      ]</span></span>
<span><span style="color: var(--shiki-color-text)">    }</span></span>
<span><span style="color: var(--shiki-color-text)">  ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;attachments&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;read_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;updated_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>
<span><span style="color: var(--shiki-color-text)">}</span></span>
<span></span></code></pre><button type="button"
                        class="group/button absolute top-3.5 right-4 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"><span
                            aria-hidden="false"
                            class="pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300"><svg
                                viewBox="0 0 20 20" aria-hidden="true"
                                class="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400">
                                <path stroke-width="0"
                                    d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z">
                                </path>
                                <path fill="none" stroke-linejoin="round"
                                    d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1">
                                </path>
                            </svg>Copy</span><span aria-hidden="true"
                            class="pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300 translate-y-1.5 opacity-0">Copied!</span></button>
                </div>
            </div>
        </div>
    </div>
</div>
<hr />
<div class="flex items-center gap-x-3"><span
        class="font-mono text-[0.625rem] font-semibold leading-6 rounded-lg px-1.5 ring-1 ring-inset ring-rose-200 bg-rose-50 text-red-500 dark:ring-rose-500/20 dark:bg-rose-400/10 dark:text-rose-400">DELETE</span><span
        class="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span><span
        class="font-mono text-xs text-zinc-400">/v1/messages/:id</span></div>
<h2 id="delete-a-message" class="mt-2 scroll-mt-32"><a class="group text-inherit no-underline hover:text-inherit"
        href="messages#delete-a-message">Delete a message</a></h2>
<div class="grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">
    <div class="[&amp;&gt;:first-child]:mt-0 [&amp;&gt;:last-child]:mb-0">
        <p>This endpoint allows you to delete messages from your conversations. Note: This will
            permanently delete the message.</p>
    </div>
    <div class="[&amp;&gt;:first-child]:mt-0 [&amp;&gt;:last-child]:mb-0 xl:sticky xl:top-24">
        <button type="button" aria-hidden="true"
            style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"></button>
        <div class="not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
            <div
                class="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
                <h3 class="mr-auto pt-3 text-xs font-semibold text-white">Request</h3>
                <div class="-mb-px flex gap-4 text-xs font-medium" role="tablist" aria-orientation="horizontal"><button
                        class="border-b py-3 transition focus:[&amp;:not(:focus-visible)]:outline-none border-emerald-500 text-emerald-400"
                        id="headlessui-tabs-tab-:Rpl9d6:" role="tab" type="button" aria-selected="true" tabindex="0"
                        data-headlessui-state="selected">cURL</button><button
                        class="border-b py-3 transition focus:[&amp;:not(:focus-visible)]:outline-none border-transparent text-zinc-400 hover:text-zinc-300"
                        id="headlessui-tabs-tab-:R19l9d6:" role="tab" type="button" aria-selected="false" tabindex="-1"
                        data-headlessui-state="">JavaScript</button><button
                        class="border-b py-3 transition focus:[&amp;:not(:focus-visible)]:outline-none border-transparent text-zinc-400 hover:text-zinc-300"
                        id="headlessui-tabs-tab-:R1pl9d6:" role="tab" type="button" aria-selected="false" tabindex="-1"
                        data-headlessui-state="">Python</button><button
                        class="border-b py-3 transition focus:[&amp;:not(:focus-visible)]:outline-none border-transparent text-zinc-400 hover:text-zinc-300"
                        id="headlessui-tabs-tab-:R29l9d6:" role="tab" type="button" aria-selected="false" tabindex="-1"
                        data-headlessui-state="">PHP</button></div>
            </div>
            <div>
                <div id="headlessui-tabs-panel-:R6l9d6:" role="tabpanel" tabindex="0" data-headlessui-state="selected">
                    <div class="group dark:bg-white/2.5">
                        <div
                            class="flex h-9 items-center gap-2 border-y border-t-transparent border-b-white/7.5 bg-zinc-900 bg-white/2.5 px-4 dark:border-b-white/5 dark:bg-white/1">
                            <div class="dark flex"><span
                                    class="font-mono text-[0.625rem] font-semibold leading-6 text-red-500 dark:text-rose-500">DELETE</span>
                            </div><span class="h-0.5 w-0.5 rounded-full bg-zinc-500"></span><span
                                class="font-mono text-xs text-zinc-400">/v1/messages/SIuAFUNKdSYHZF2w</span>
                        </div>
                        <div class="relative">
                            <pre class="overflow-x-auto p-4 text-xs text-white"><code class="language-bash"><span><span style="color: var(--shiki-color-text)">curl -X DELETE https://api.protocol.chat/v1/messages/SIuAFUNKdSYHZF2w \</span></span>
<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span></span>
<span></span></code></pre><button type="button"
                                class="group/button absolute top-3.5 right-4 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"><span
                                    aria-hidden="false"
                                    class="pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300"><svg
                                        viewBox="0 0 20 20" aria-hidden="true"
                                        class="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400">
                                        <path stroke-width="0"
                                            d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z">
                                        </path>
                                        <path fill="none" stroke-linejoin="round"
                                            d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1">
                                        </path>
                                    </svg>Copy</span><span aria-hidden="true"
                                    class="pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300 translate-y-1.5 opacity-0">Copied!</span></button>
                        </div>
                    </div>
                </div><span id="headlessui-tabs-panel-:Ral9d6:" role="tabpanel" tabindex="-1"
                    style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"></span><span
                    id="headlessui-tabs-panel-:Rel9d6:" role="tabpanel" tabindex="-1"
                    style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"></span><span
                    id="headlessui-tabs-panel-:Ril9d6:" role="tabpanel" tabindex="-1"
                    style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"></span>
            </div>
        </div>
    </div>
</div>
</article>
</main>
<footer class="mx-auto max-w-2xl space-y-10 pb-16 lg:max-w-5xl">
    <div class="relative h-8">
        <form class="absolute inset-0 flex items-center justify-center gap-6 md:justify-start">
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Was this page helpful?</p>
            <div
                class="group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10">
                <button type="submit"
                    class="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
                    data-response="yes">Yes</button>
                <div class="bg-zinc-900/10 dark:bg-white/10"></div><button type="submit"
                    class="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
                    data-response="no">No</button>
            </div>
        </form>
    </div>
    <div class="flex">
        <div class="flex flex-col items-start gap-3"><a
                class="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
                aria-label="Previous: Conversations" href="conversations"><svg viewBox="0 0 20 20" fill="none"
                    aria-hidden="true" class="mt-0.5 h-5 w-5 -ml-1 rotate-180">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path>
                </svg>Previous</a><a tabindex="-1" aria-hidden="true"
                class="text-base font-semibold text-zinc-900 transition hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
                href="conversations">Conversations</a></div>
        <div class="ml-auto flex flex-col items-end gap-3"><a
                class="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
                aria-label="Next: Groups" href="groups">Next<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"
                    class="mt-0.5 h-5 w-5 -mr-1">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path>
                </svg></a><a tabindex="-1" aria-hidden="true"
                class="text-base font-semibold text-zinc-900 transition hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
                href="groups">Groups</a></div>
    </div>
    <div
        class="flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 dark:border-white/5 sm:flex-row">
        <p class="text-xs text-zinc-600 dark:text-zinc-400">© Copyright
            <!-- -->2023
            <!-- -->. All rights reserved.
        </p>
        <div class="flex gap-4"><a class="group" href="messages#"><span class="sr-only">Follow us on
                    Twitter</span><svg viewBox="0 0 20 20" aria-hidden="true"
                    class="h-5 w-5 fill-zinc-700 transition group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500">
                    <path
                        d="M16.712 6.652c.01.146.01.29.01.436 0 4.449-3.267 9.579-9.242 9.579v-.003a8.963 8.963 0 0 1-4.98-1.509 6.379 6.379 0 0 0 4.807-1.396c-1.39-.027-2.608-.966-3.035-2.337.487.097.99.077 1.467-.059-1.514-.316-2.606-1.696-2.606-3.3v-.041c.45.26.956.404 1.475.42C3.18 7.454 2.74 5.486 3.602 3.947c1.65 2.104 4.083 3.382 6.695 3.517a3.446 3.446 0 0 1 .94-3.217 3.172 3.172 0 0 1 4.596.148 6.38 6.38 0 0 0 2.063-.817 3.357 3.357 0 0 1-1.428 1.861 6.283 6.283 0 0 0 1.865-.53 6.735 6.735 0 0 1-1.62 1.744Z">
                    </path>
                </svg></a><a class="group" href="messages#"><span class="sr-only">Follow us on
                    GitHub</span><svg viewBox="0 0 20 20" aria-hidden="true"
                    class="h-5 w-5 fill-zinc-700 transition group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M10 1.667c-4.605 0-8.334 3.823-8.334 8.544 0 3.78 2.385 6.974 5.698 8.106.417.075.573-.182.573-.406 0-.203-.011-.875-.011-1.592-2.093.397-2.635-.522-2.802-1.002-.094-.246-.5-1.005-.854-1.207-.291-.16-.708-.556-.01-.567.656-.01 1.124.62 1.281.876.75 1.292 1.948.93 2.427.705.073-.555.291-.93.531-1.143-1.854-.213-3.791-.95-3.791-4.218 0-.929.322-1.698.854-2.296-.083-.214-.375-1.09.083-2.265 0 0 .698-.224 2.292.876a7.576 7.576 0 0 1 2.083-.288c.709 0 1.417.096 2.084.288 1.593-1.11 2.291-.875 2.291-.875.459 1.174.167 2.05.084 2.263.53.599.854 1.357.854 2.297 0 3.278-1.948 4.005-3.802 4.219.302.266.563.78.563 1.58 0 1.143-.011 2.061-.011 2.35 0 .224.156.491.573.405a8.365 8.365 0 0 0 4.11-3.116 8.707 8.707 0 0 0 1.567-4.99c0-4.721-3.73-8.545-8.334-8.545Z">
                    </path>
                </svg></a><a class="group" href="messages#"><span class="sr-only">Join our Discord
                    server</span><svg viewBox="0 0 20 20" aria-hidden="true"
                    class="h-5 w-5 fill-zinc-700 transition group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500">
                    <path
                        d="M16.238 4.515a14.842 14.842 0 0 0-3.664-1.136.055.055 0 0 0-.059.027 10.35 10.35 0 0 0-.456.938 13.702 13.702 0 0 0-4.115 0 9.479 9.479 0 0 0-.464-.938.058.058 0 0 0-.058-.027c-1.266.218-2.497.6-3.664 1.136a.052.052 0 0 0-.024.02C1.4 8.023.76 11.424 1.074 14.782a.062.062 0 0 0 .024.042 14.923 14.923 0 0 0 4.494 2.272.058.058 0 0 0 .064-.02c.346-.473.654-.972.92-1.496a.057.057 0 0 0-.032-.08 9.83 9.83 0 0 1-1.404-.669.058.058 0 0 1-.029-.046.058.058 0 0 1 .023-.05c.094-.07.189-.144.279-.218a.056.056 0 0 1 .058-.008c2.946 1.345 6.135 1.345 9.046 0a.056.056 0 0 1 .059.007c.09.074.184.149.28.22a.058.058 0 0 1 .023.049.059.059 0 0 1-.028.046 9.224 9.224 0 0 1-1.405.669.058.058 0 0 0-.033.033.056.056 0 0 0 .002.047c.27.523.58 1.022.92 1.495a.056.056 0 0 0 .062.021 14.878 14.878 0 0 0 4.502-2.272.055.055 0 0 0 .016-.018.056.056 0 0 0 .008-.023c.375-3.883-.63-7.256-2.662-10.246a.046.046 0 0 0-.023-.021Zm-9.223 8.221c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.717 1.814-1.618 1.814Zm5.981 0c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.71 1.814-1.618 1.814Z">
                    </path>
                </svg></a></div>
    </div>
</footer>
</div>
</div>
</div>
<script id="__NEXT_DATA__" type="application/json">
    {"props":{"pageProps":{"description":"On this page, we’ll dive into the different message endpoints you can use to manage messages programmatically.","sections":[{"title":"The message model","id":"the-message-model"},{"title":"List all messages","id":"list-all-messages","tag":"GET","label":"/v1/messages"},{"title":"Send a message","id":"send-a-message","tag":"POST","label":"/v1/messages"},{"title":"Retrieve a message","id":"retrieve-a-message","tag":"GET","label":"/v1/messages/:id"},{"title":"Update a message","id":"update-a-message","tag":"PUT","label":"/v1/messages/:id"},{"title":"Delete a message","id":"delete-a-message","tag":"DELETE","label":"/v1/messages/:id"}],"title":"Messages"},"__N_SSG":true},"page":"/messages","query":{},"buildId":"WA_UIYXxpLGp_ZNykk82c","isFallback":false,"gsp":true,"scriptLoader":[]}
</script>
</body>
</html>