
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const VITE_API_URL: string;
	export const NVM_INC: string;
	export const MANPATH: string;
	export const NODE: string;
	export const NVM_CD_FLAGS: string;
	export const TERM: string;
	export const SHELL: string;
	export const TMPDIR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const WINDOWID: string;
	export const npm_config_local_prefix: string;
	export const ZSH: string;
	export const PNPM_HOME: string;
	export const LC_ALL: string;
	export const USER: string;
	export const NVM_DIR: string;
	export const LS_COLORS: string;
	export const ENHANCD_DOT_ARG: string;
	export const COMMAND_MODE: string;
	export const SSH_AUTH_SOCK: string;
	export const ENHANCD_ROOT: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const PAGER: string;
	export const LSCOLORS: string;
	export const PATH: string;
	export const npm_package_json: string;
	export const _: string;
	export const ENHANCD_FILTER_ABBREV: string;
	export const ENHANCD_DIR: string;
	export const __CFBundleIdentifier: string;
	export const ENHANCD_DISABLE_HOME: string;
	export const PWD: string;
	export const npm_lifecycle_event: string;
	export const npm_package_name: string;
	export const ENHANCD_HOME_ARG: string;
	export const XPC_FLAGS: string;
	export const npm_package_version: string;
	export const XPC_SERVICE_NAME: string;
	export const ENHANCD_HYPHEN_NUM: string;
	export const SHLVL: string;
	export const HOME: string;
	export const ENHANCD_COMMAND: string;
	export const HOMEBREW_PREFIX: string;
	export const ENHANCD_FILTER: string;
	export const ENHANCD_DISABLE_HYPHEN: string;
	export const LOGNAME: string;
	export const LESS: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const ENHANCD_COMPLETION_KEYBIND: string;
	export const ZED_TERM: string;
	export const ENHANCD_COMPLETION_DEFAULT: string;
	export const NVM_BIN: string;
	export const BUN_INSTALL: string;
	export const npm_config_user_agent: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const ENHANCD_COMPLETION_BEHAVIOR: string;
	export const ENHANCD_DISABLE_DOT: string;
	export const ENHANCD_HYPHEN_ARG: string;
	export const npm_node_execpath: string;
	export const _ENHANCD_VERSION: string;
	export const COLORTERM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		VITE_API_URL: string;
		NVM_INC: string;
		MANPATH: string;
		NODE: string;
		NVM_CD_FLAGS: string;
		TERM: string;
		SHELL: string;
		TMPDIR: string;
		HOMEBREW_REPOSITORY: string;
		WINDOWID: string;
		npm_config_local_prefix: string;
		ZSH: string;
		PNPM_HOME: string;
		LC_ALL: string;
		USER: string;
		NVM_DIR: string;
		LS_COLORS: string;
		ENHANCD_DOT_ARG: string;
		COMMAND_MODE: string;
		SSH_AUTH_SOCK: string;
		ENHANCD_ROOT: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		PAGER: string;
		LSCOLORS: string;
		PATH: string;
		npm_package_json: string;
		_: string;
		ENHANCD_FILTER_ABBREV: string;
		ENHANCD_DIR: string;
		__CFBundleIdentifier: string;
		ENHANCD_DISABLE_HOME: string;
		PWD: string;
		npm_lifecycle_event: string;
		npm_package_name: string;
		ENHANCD_HOME_ARG: string;
		XPC_FLAGS: string;
		npm_package_version: string;
		XPC_SERVICE_NAME: string;
		ENHANCD_HYPHEN_NUM: string;
		SHLVL: string;
		HOME: string;
		ENHANCD_COMMAND: string;
		HOMEBREW_PREFIX: string;
		ENHANCD_FILTER: string;
		ENHANCD_DISABLE_HYPHEN: string;
		LOGNAME: string;
		LESS: string;
		ALACRITTY_WINDOW_ID: string;
		ENHANCD_COMPLETION_KEYBIND: string;
		ZED_TERM: string;
		ENHANCD_COMPLETION_DEFAULT: string;
		NVM_BIN: string;
		BUN_INSTALL: string;
		npm_config_user_agent: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		ENHANCD_COMPLETION_BEHAVIOR: string;
		ENHANCD_DISABLE_DOT: string;
		ENHANCD_HYPHEN_ARG: string;
		npm_node_execpath: string;
		_ENHANCD_VERSION: string;
		COLORTERM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
