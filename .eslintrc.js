module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "eslint:recommended"
    ],
    env: {
        browser: true,
        node: true
    },
    rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off"
    },
    ignorePatterns: ["dist/js", "bin/"],
};