// Menu: Manage Kit
// Description: Options and Helpers

import { Choice } from "../types/core"
import { CLI } from "../types/cli"

import { kitMode, run } from "../core/utils.js"

let kitManagementChoices: Choice<keyof CLI>[] = [
  {
    name: "Manage kenvs",
    description: "Add/Remove/Update repos of scripts",
    value: "kenv-manage",
  },
  {
    name: "Open kit.log",
    description: `Open ~/.kit/logs/kit.log in ${env.KIT_EDITOR}`,
    value: "kit-log",
  },
  {
    name: "Update Kit.app",
    description: `Version: ${env.KIT_APP_VERSION}`,
    value: "update",
  },

  {
    name: "View schedule",
    description: "View and edit upcoming jobs",
    value: "schedule",
  },
  {
    name: "System Scripts",
    description: "View and edit system event scripts",
    value: "system-events",
  },
  {
    name: "Open Script Kit at Login",
    description: "Open toggle login at launch at login",
    value: "open-at-login",
  },

  {
    name: "Add ~/.kit/bin to $PATH",
    description: `Looks for your profile and appends to $PATH`,
    value: "add-kit-to-profile",
  },
  {
    name: "Add ~/.kenv/bin to $PATH",
    description: `Looks for your profile and appends ${kenvPath()} to $PATH`,
    value: "add-kenv-to-profile",
  },
  {
    name: "Change main keyboard shortcut",
    description:
      "Pick a new keyboard shortcut for the main menu",
    value: "change-main-shortcut",
  },
  {
    name: "Change script shortcut",
    description:
      "Pick a new keyboard shortcut for a script",
    value: "change-shortcut",
  },
  {
    name: "Generate bin files",
    description: "Recreate all the terminal executables",
    value: "create-all-bins",
  },

  {
    name: "Change editor",
    description: "Pick a new editor",
    value: "change-editor",
  },
  {
    name: "Clear Kit prompt cache",
    description: "Reset prompt position and sizes",
    value: "kit-clear-prompt",
  },
  {
    name: "Manage npm packages",
    description: `add or remove npm package`,
    value: "manage-npm",
  },
  {
    name: "Prepare Script for Stream Deck",
    description:
      "Launch a script from a Stream Deck button",
    value: "stream-deck",
  },
  kitMode() === "ts"
    ? {
        name: "Switch to JavaScript Mode",
        description: "Sets .env KIT_MODE=js",
        value: "switch-to-js",
      }
    : {
        name: "Switch to TypeScript mode",
        description: "Sets .env KIT_MODE=ts",
        value: "switch-to-ts",
      },
  {
    name: "Sync $PATH from Terminal to Kit.app",
    description: "Set .env PATH to the terminal $PATH",
    value: "sync-path-instructions",
  },
  {
    name: "Created by John Lindquist",
    description: `Follow @johnlindquist on twitter`,
    value: "credits",
    img: kitPath("images", "john.png"),
  },
  {
    name: "Quit",
    description: `Quit Script Kit`,
    value: "quit",
  },
]

let cliScript = await arg(
  `Kit Options`,
  kitManagementChoices
)

await run(kitPath("cli", cliScript) + ".js")

export {}
