export { }

import { ProcessType, UI, Mode } from "../core/enum.js"

export interface Choice<Value = any> {
  name: string
  value?: Value
  description?: string
  focused?: string
  img?: string
  icon?: string
  html?: string
  hasPreview?: boolean
  preview?:
  | string
  | ((
    choice: Choice & { input: string; index: number }
  ) => string | Promise<string>)
  previewLang?: string
  id?: string
  shortcode?: string[]
  className?: string
  tag?: string
  shortcut?: string
  drag?:
  | {
    format?: string
    data?: string
  }
  | string
}

export interface ScriptPathInfo {
  command: string
  filePath: string
  kenv: string
  id: string
  icon?: string
}

export interface ScriptMetadata {
  name?: string
  menu?: string
  description?: string
  shortcut?: string
  shortcode?: string[]
  friendlyShortcut?: string
  alias?: string
  author?: string
  twitter?: string
  exclude?: boolean
  schedule?: string
  system?: string
  watch?: string
  background?: string
  type: ProcessType
  requiresPrompt: boolean
  timeout?: number
  tabs?: string[]
  tag?: string
  log?: "true" | "false"
  hasFlags?: boolean
  img?: string
  cmd?: string
  option?: string
  ctrl?: string
  shift?: string
  hasPreview?: boolean
}

export type Script = ScriptMetadata &
  ScriptPathInfo &
  Choice

export type PromptBounds = {
  x: number
  y: number
  width: number
  height: number
}

export type PromptState = "collapsed" | "expanded"

export type PromptDb = {
  screens: {
    [screenId: string]: {
      [key in PromptState]: PromptBounds
    }
  }
}

export type InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week"

export interface PromptData {
  id: number
  script: Script
  ui: UI
  placeholder: string
  kitScript: string
  choices: Choice[]
  tabs: string[]
  ignoreBlur: boolean
  textarea?: boolean
  secret?: boolean
  strict?: boolean
  mode?: Mode
  className?: string
  hint?: string
  input?: string
  selected?: string
  type?: InputType
  hasPreview?: boolean
}

export interface GenerateChoices {
  (input: string): Choice<any>[] | Promise<Choice<any>[]>
}

export type Choices<Value> =
  | string[]
  | Choice<Value>[]
  | (() => Choice<Value>[])
  | (() => Promise<Choice<Value>[]>)
  | Promise<Choice<any>[]>
  | GenerateChoices

export type Panel =
  | string
  | (() => string)
  | (() => Promise<string>)
  | ((input: string) => string)
  | ((input: string) => Promise<any>)

export type FlagsOptions = {
  [key: string]:
  | {
    shortcut?: string
    name?: string
    description?: string
  }
  | undefined
}

export interface PromptConfig
  extends Partial<
  Omit<PromptData, "choices" | "id" | "script">
  > {
  validate?: (
    choice: string
  ) => boolean | string | Promise<boolean | string>
  choices?: Choices<any> | Panel
  flags?: FlagsOptions
  preview?: string | (() => string | Promise<string>),
  onNoChoices?: (input: string) => void | Promise<void>
  onChoices?: (input: string) => void | Promise<void>
}

export interface Metadata {
  [key: string]: string
}
