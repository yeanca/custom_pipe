# Angular Custom Pipe Demo

A simple Angular 20.2.0 application demonstrating a custom number-to-words pipe.

## Overview

This project shows how to create and use custom Angular pipes. The main feature is a `NumberToWordsPipe` that converts numeric values to their English word representation.

## Features

- **Custom Pipe**: Converts numbers to English words (e.g., 1003 → "One Thousand and Three")
- **Number Support**: Handles numbers from zero to nonillion
- **Formatted Output**: Includes proper comma formatting and British English style
- **Modern Angular**: Built with Angular 20.2.0 and TypeScript 5.8.0
- **Single Component**: Consolidated component structure for demo simplicity

## Project Structure

```
src/
├── app/
│   ├── app.component.ts      # Main component with template and styles
│   ├── app.module.ts        # Angular module configuration
│   └── num-to-words.pipe.ts # Custom pipe implementation
├── main.ts                # Application bootstrap
└── styles.css             # Global styles (minimal)
```

## Usage

1. **Development Server**: Run `ng serve` to start at `http://localhost:4200/`
2. **Build**: Run `ng build` to create production build in `dist/`
3. **Test**: Run `ng test` to execute unit tests

## Technologies

- Angular 20.2.0
- TypeScript 5.8.0
- RxJS 7.8.0
- Zone.js 0.14.0

## Getting Started

```bash
npm install
ng serve
```

Navigate to `http://localhost:4200/` and try entering different numbers to see them converted to words.
