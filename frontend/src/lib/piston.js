// Piston API is a service for code execution

const PISTON_API = "https://emkc.org/api/v2/piston";

const LANGUAGE_VERSIONS = {
  javascript: { language: "javascript", version: "18.15.0" },
  python: { language: "python", version: "3.10.0" },
  java: { language: "java", version: "15.0.2" },
  c: { language: "c", version: "11.2.0" },
  cpp: { language : "c++", version:"10.2.0"},  
};

/**
 * @param {string} language - programming language
 * @param {string} code - source code to executed
 * @returns {Promise<{success:boolean, output?:string, error?: string}>}
 */
export async function executeCode(language, code) {
  try {
    const languageConfig = LANGUAGE_VERSIONS[language];

    if (!languageConfig) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    const response = await fetch(`${PISTON_API}/execute`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: languageConfig.language,
        version: languageConfig.version,
        files: [
          {
            name: `main.${getFileExtension(language)}`,
            content: code,
          },
        ],
      }),
    });

    if (!response.ok) {
      return {
        success: false,
        error: `HTTP error! status: ${response.status}`,
      };
    }

    const data = await response.json();

    // Piston may return compile-time errors in `compile` and runtime errors in `run`.
    const compileOutput = data.compile?.stdout || data.compile?.stderr || "";
    const runOutput = data.run?.output || data.run?.stdout || "";
    const runStderr = data.run?.stderr || "";

    // Prefer showing compile errors if present (common for C/C++ submissions).
    if (compileOutput) {
      return {
        success: false,
        output: runOutput || "",
        error: compileOutput,
      };
    }

    if (runStderr) {
      return {
        success: false,
        output: runOutput || "",
        error: runStderr,
      };
    }

    return {
      success: true,
      output: runOutput || "No output",
    };
  } catch (error) {
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
}

function getFileExtension(language) {
  const extensions = {
    javascript: "js",
    python: "py",
    java: "java",
    c: "c",
    cpp: "cpp",
  };

  return extensions[language] || "txt";
}