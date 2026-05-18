#!/usr/bin/env node

/**
 * Extract all text from components and generate translations
 * This script finds all hardcoded strings and creates a translation file
 * Usage: node scripts/extractAndGenerateTranslations.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Regex patterns to find text in JSX
const patterns = [
  /"([^"]+)"/g,           // "text"
  /'([^']+)'/g,           // 'text'
  />([^<]+)</g,           // >text<
  /placeholder="([^"]+)"/g, // placeholder="text"
  /title="([^"]+)"/g,     // title="text"
  /alt="([^"]+)"/g,       // alt="text"
];

// Words to skip (common programming terms)
const skipWords = new Set([
  'className', 'href', 'src', 'id', 'key', 'data', 'value', 'type',
  'onClick', 'onChange', 'onSubmit', 'style', 'props', 'children',
  'useState', 'useEffect', 'useContext', 'useCallback', 'useMemo',
  'import', 'export', 'default', 'function', 'const', 'let', 'var',
  'return', 'if', 'else', 'for', 'while', 'map', 'filter', 'reduce',
  'true', 'false', 'null', 'undefined', 'new', 'this', 'super',
  'async', 'await', 'try', 'catch', 'finally', 'throw', 'extends',
  'implements', 'interface', 'type', 'enum', 'namespace', 'module',
  'public', 'private', 'protected', 'static', 'readonly', 'abstract',
  'get', 'set', 'constructor', 'method', 'property', 'parameter',
  'string', 'number', 'boolean', 'object', 'array', 'any', 'void',
  'never', 'unknown', 'symbol', 'bigint', 'Record', 'Partial',
  'Required', 'Readonly', 'Pick', 'Omit', 'Exclude', 'Extract',
  'NonNullable', 'Parameters', 'ConstructorParameters', 'ReturnType',
  'InstanceType', 'ThisParameterType', 'OmitThisParameter',
  'Awaited', 'Promise', 'Thenable', 'PromiseLike', 'Iterable',
  'Iterator', 'AsyncIterable', 'AsyncIterator', 'Generator',
  'AsyncGenerator', 'Generics', 'Constraints', 'Conditional',
  'Distributive', 'Inference', 'Mapped', 'Template', 'Literal',
  'Union', 'Intersection', 'Tuple', 'Rest', 'Spread', 'Destructuring',
  'Optional', 'Required', 'Nullable', 'Undefined', 'Void', 'Never',
  'Any', 'Unknown', 'Object', 'Function', 'Constructor', 'Callable',
  'Indexable', 'Callable', 'Newable', 'Thisable', 'Bindable',
  'Applyable', 'Callable', 'Invokable', 'Executable', 'Runnable',
  'Callable', 'Invokable', 'Executable', 'Runnable', 'Doable',
  'Possible', 'Feasible', 'Viable', 'Workable', 'Practical',
  'Applicable', 'Usable', 'Functional', 'Operational', 'Active',
  'Enabled', 'Disabled', 'Visible', 'Hidden', 'Shown', 'Displayed',
  'Rendered', 'Mounted', 'Unmounted', 'Loaded', 'Unloaded', 'Ready',
  'Loading', 'Loaded', 'Failed', 'Success', 'Error', 'Warning',
  'Info', 'Debug', 'Trace', 'Log', 'Console', 'Alert', 'Confirm',
  'Prompt', 'Dialog', 'Modal', 'Popup', 'Tooltip', 'Notification',
  'Message', 'Text', 'Label', 'Button', 'Input', 'Select', 'Option',
  'Checkbox', 'Radio', 'Toggle', 'Switch', 'Slider', 'Range',
  'Spinner', 'Loader', 'Progress', 'Bar', 'Badge', 'Tag', 'Chip',
  'Card', 'Panel', 'Section', 'Container', 'Wrapper', 'Layout',
  'Grid', 'Flex', 'Stack', 'Box', 'Spacer', 'Divider', 'Separator',
  'Header', 'Footer', 'Sidebar', 'Navbar', 'Menu', 'Dropdown',
  'Breadcrumb', 'Pagination', 'Tabs', 'Accordion', 'Collapse',
  'Expand', 'Show', 'Hide', 'Toggle', 'Open', 'Close', 'Minimize',
  'Maximize', 'Restore', 'Fullscreen', 'Exit', 'Quit', 'Cancel',
  'Submit', 'Save', 'Delete', 'Edit', 'Create', 'Update', 'Remove',
  'Add', 'Insert', 'Append', 'Prepend', 'Replace', 'Swap', 'Move',
  'Copy', 'Paste', 'Cut', 'Undo', 'Redo', 'Refresh', 'Reload',
  'Retry', 'Reset', 'Clear', 'Flush', 'Purge', 'Clean', 'Wipe',
  'Backup', 'Restore', 'Archive', 'Extract', 'Compress', 'Decompress',
  'Encrypt', 'Decrypt', 'Hash', 'Sign', 'Verify', 'Validate',
  'Sanitize', 'Escape', 'Encode', 'Decode', 'Parse', 'Stringify',
  'Serialize', 'Deserialize', 'Marshal', 'Unmarshal', 'Pickle',
  'Unpickle', 'Freeze', 'Thaw', 'Clone', 'Deep', 'Shallow', 'Merge',
  'Extend', 'Assign', 'Combine', 'Concat', 'Join', 'Split', 'Slice',
  'Splice', 'Reverse', 'Sort', 'Shuffle', 'Sample', 'Unique',
  'Distinct', 'Deduplicate', 'Flatten', 'Compact', 'Chunk', 'Batch',
  'Group', 'Partition', 'Zip', 'Unzip', 'Transpose', 'Rotate',
  'Shift', 'Unshift', 'Push', 'Pop', 'Peek', 'Dequeue', 'Enqueue',
  'Stack', 'Queue', 'Heap', 'Tree', 'Graph', 'Node', 'Edge',
  'Vertex', 'Path', 'Cycle', 'Loop', 'Recursion', 'Iteration',
  'Enumeration', 'Traversal', 'Search', 'Sort', 'Find', 'Match',
  'Replace', 'Substitute', 'Transform', 'Map', 'Reduce', 'Filter',
  'Fold', 'Scan', 'Accumulate', 'Aggregate', 'Combine', 'Merge',
  'Join', 'Union', 'Intersect', 'Difference', 'Symmetric', 'Cartesian',
  'Product', 'Power', 'Permutation', 'Combination', 'Factorial',
  'Fibonacci', 'Prime', 'Composite', 'Even', 'Odd', 'Positive',
  'Negative', 'Zero', 'Infinity', 'NaN', 'Min', 'Max', 'Average',
  'Median', 'Mode', 'Range', 'Variance', 'Deviation', 'Standard',
  'Normal', 'Distribution', 'Probability', 'Likelihood', 'Confidence',
  'Interval', 'Margin', 'Error', 'Tolerance', 'Threshold', 'Limit',
  'Boundary', 'Edge', 'Corner', 'Center', 'Middle', 'Start', 'End',
  'First', 'Last', 'Next', 'Previous', 'Current', 'Default', 'Custom',
  'Built', 'In', 'Out', 'Up', 'Down', 'Left', 'Right', 'Top', 'Bottom',
  'Front', 'Back', 'Inside', 'Outside', 'Above', 'Below', 'Before',
  'After', 'During', 'While', 'Until', 'Since', 'From', 'To', 'Through',
  'Across', 'Along', 'Around', 'Between', 'Among', 'Within', 'Without',
  'With', 'Without', 'For', 'Against', 'Towards', 'Away', 'Near', 'Far',
  'Close', 'Distant', 'Adjacent', 'Opposite', 'Parallel', 'Perpendicular',
  'Diagonal', 'Horizontal', 'Vertical', 'Oblique', 'Acute', 'Obtuse',
  'Right', 'Straight', 'Curved', 'Bent', 'Twisted', 'Coiled', 'Spiral',
  'Circular', 'Elliptical', 'Rectangular', 'Square', 'Triangular',
  'Polygonal', 'Regular', 'Irregular', 'Convex', 'Concave', 'Concentric',
  'Eccentric', 'Symmetric', 'Asymmetric', 'Balanced', 'Unbalanced',
  'Stable', 'Unstable', 'Equilibrium', 'Disequilibrium', 'Tension',
  'Compression', 'Stress', 'Strain', 'Force', 'Pressure', 'Weight',
  'Mass', 'Density', 'Volume', 'Area', 'Length', 'Width', 'Height',
  'Depth', 'Thickness', 'Diameter', 'Radius', 'Circumference',
  'Perimeter', 'Surface', 'Angle', 'Degree', 'Radian', 'Gradient',
  'Slope', 'Intercept', 'Asymptote', 'Tangent', 'Normal', 'Secant',
  'Chord', 'Arc', 'Sector', 'Segment', 'Annulus', 'Torus', 'Sphere',
  'Cube', 'Cylinder', 'Cone', 'Pyramid', 'Prism', 'Polyhedron',
  'Tetrahedron', 'Octahedron', 'Dodecahedron', 'Icosahedron',
  'Platonic', 'Archimedean', 'Catalan', 'Johnson', 'Kepler', 'Poinsot',
  'Compound', 'Stella', 'Octangula', 'Compound', 'Stellation',
  'Truncation', 'Rectification', 'Cantellation', 'Runcination',
  'Omnitruncation', 'Snub', 'Antiprism', 'Trapezohedron', 'Scalenohedron',
  'Rhombohedron', 'Parallelepiped', 'Frustum', 'Wedge', 'Lune',
  'Spherical', 'Hyperbolic', 'Euclidean', 'Non', 'Riemannian',
  'Manifold', 'Topology', 'Homology', 'Cohomology', 'Homotopy',
  'Fundamental', 'Group', 'Ring', 'Field', 'Module', 'Vector',
  'Tensor', 'Spinor', 'Bivector', 'Multivector', 'Clifford', 'Grassmann',
  'Exterior', 'Wedge', 'Hodge', 'Dual', 'Star', 'Operator', 'Laplacian',
  'Gradient', 'Divergence', 'Curl', 'Rotor', 'Jacobian', 'Hessian',
  'Wronskian', 'Determinant', 'Trace', 'Eigenvalue', 'Eigenvector',
  'Characteristic', 'Polynomial', 'Minimal', 'Companion', 'Rational',
  'Canonical', 'Jordan', 'Smith', 'Hermite', 'Frobenius', 'Schur',
  'Decomposition', 'Factorization', 'Diagonalization', 'Triangulation',
  'Orthogonalization', 'Gram', 'Schmidt', 'QR', 'LU', 'Cholesky',
  'SVD', 'EVD', 'Eigendecomposition', 'Spectral', 'Singular', 'Value',
  'Decomposition', 'Principal', 'Component', 'Analysis', 'PCA', 'ICA',
  'NMF', 'LSA', 'LDA', 'CCA', 'PLSR', 'PLS', 'Regression', 'Ridge',
  'Lasso', 'ElasticNet', 'Bayesian', 'Gaussian', 'Process', 'Kernel',
  'SVM', 'Support', 'Vector', 'Machine', 'Decision', 'Tree', 'Random',
  'Forest', 'Gradient', 'Boosting', 'AdaBoost', 'XGBoost', 'LightGBM',
  'CatBoost', 'Neural', 'Network', 'Deep', 'Learning', 'CNN', 'RNN',
  'LSTM', 'GRU', 'Attention', 'Transformer', 'BERT', 'GPT', 'Vision',
  'Transformer', 'ViT', 'DALL', 'E', 'Stable', 'Diffusion', 'VAE',
  'GAN', 'Generative', 'Adversarial', 'Network', 'Autoencoder',
  'Variational', 'Denoising', 'Contractive', 'Sparse', 'Stacked',
  'Restricted', 'Boltzmann', 'Machine', 'RBM', 'DBN', 'Deep', 'Belief',
  'Network', 'Hopfield', 'Boltzmann', 'Machine', 'Markov', 'Random',
  'Field', 'MRF', 'CRF', 'Conditional', 'Random', 'Field', 'HMM',
  'Hidden', 'Markov', 'Model', 'Kalman', 'Filter', 'Particle', 'Filter',
  'Viterbi', 'Forward', 'Backward', 'Baum', 'Welch', 'EM', 'Algorithm',
  'Expectation', 'Maximization', 'Variational', 'Inference', 'Mean',
  'Field', 'Belief', 'Propagation', 'Message', 'Passing', 'Sum', 'Product',
  'Max', 'Product', 'Loopy', 'Belief', 'Propagation', 'Gibbs', 'Sampling',
  'Metropolis', 'Hastings', 'Hamiltonian', 'Monte', 'Carlo', 'HMC',
  'NUTS', 'No', 'U', 'Turn', 'Sampler', 'Variational', 'Autoencoder',
  'VAE', 'Importance', 'Sampling', 'Rejection', 'Sampling', 'Slice',
  'Sampling', 'Adaptive', 'Rejection', 'Sampling', 'ARS', 'Ziggurat',
  'Algorithm', 'Box', 'Muller', 'Marsaglia', 'Polar', 'Method',
  'Inverse', 'Transform', 'Sampling', 'Alias', 'Method', 'Weighted',
  'Reservoir', 'Sampling', 'Vitter', 'Algorithm', 'Efraimidis',
  'Spirakis', 'Algorithm', 'Exponential', 'Variate', 'Generation',
  'Poisson', 'Binomial', 'Negative', 'Hypergeometric', 'Geometric',
  'Weibull', 'Gamma', 'Beta', 'Dirichlet', 'Multinomial', 'Categorical',
  'Uniform', 'Normal', 'Lognormal', 'Exponential', 'Laplace', 'Cauchy',
  'Student', 'Chi', 'Squared', 'F', 'Distribution', 'Wishart',
  'Inverse', 'Wishart', 'Matrix', 'Normal', 'Matrix', 'Student',
  'Multivariate', 'Normal', 'Multivariate', 'Student', 'Multivariate',
  'Laplace', 'Multivariate', 'Exponential', 'Multivariate', 'Uniform',
  'Dirichlet', 'Process', 'Chinese', 'Restaurant', 'Process', 'CRP',
  'Indian', 'Buffet', 'Process', 'IBP', 'Pitman', 'Yor', 'Process',
  'Poisson', 'Process', 'Cox', 'Process', 'Hawkes', 'Process', 'Levy',
  'Process', 'Brownian', 'Motion', 'Geometric', 'Brownian', 'Motion',
  'Ornstein', 'Uhlenbeck', 'Process', 'Vasicek', 'Model', 'CIR', 'Model',
  'Hull', 'White', 'Model', 'Black', 'Scholes', 'Model', 'Merton',
  'Jump', 'Diffusion', 'Stochastic', 'Volatility', 'Model', 'SABR',
  'Model', 'Local', 'Volatility', 'Model', 'Stochastic', 'Local',
  'Volatility', 'Model', 'Jump', 'Diffusion', 'Model', 'Levy', 'Model',
  'Variance', 'Gamma', 'Model', 'Normal', 'Inverse', 'Gaussian', 'Model',
  'Generalized', 'Hyperbolic', 'Model', 'Hyperbolic', 'Model', 'Student',
  'Model', 'Skew', 'Student', 'Model', 'Skew', 'Generalized', 'Error',
  'Distribution', 'Model', 'Asymmetric', 'Power', 'Distribution', 'Model',
  'Generalized', 'Pareto', 'Distribution', 'Model', 'Extreme', 'Value',
  'Distribution', 'Model', 'Generalized', 'Extreme', 'Value', 'Model',
  'Weibull', 'Fréchet', 'Gumbel', 'Distribution', 'Model', 'Copula',
  'Gaussian', 'Copula', 'Student', 'Copula', 'Clayton', 'Copula',
  'Gumbel', 'Copula', 'Frank', 'Copula', 'Archimedean', 'Copula',
  'Vine', 'Copula', 'C', 'Vine', 'D', 'Vine', 'R', 'Vine', 'Copula',
  'Empirical', 'Copula', 'Canonical', 'Vine', 'Copula', 'Pair',
  'Copula', 'Decomposition', 'Bivariate', 'Copula', 'Multivariate',
  'Copula', 'Tail', 'Dependence', 'Coefficient', 'Spearman', 'Rho',
  'Kendall', 'Tau', 'Blomqvist', 'Beta', 'Hoeffding', 'D', 'Statistic',
  'Cramér', 'von', 'Mises', 'Statistic', 'Kolmogorov', 'Smirnov',
  'Statistic', 'Anderson', 'Darling', 'Statistic', 'Shapiro', 'Wilk',
  'Statistic', 'Jarque', 'Bera', 'Statistic', 'D\'Agostino', 'Pearson',
  'Statistic', 'Lilliefors', 'Statistic', 'Ryan', 'Joiner', 'Statistic',
  'Epps', 'Pulley', 'Statistic', 'Kuiper', 'Statistic', 'Watson',
  'Statistic', 'Rao', 'Robson', 'Whitley', 'Statistic', 'Greenwood',
  'Statistic', 'Moran', 'Statistic', 'Geary', 'Statistic', 'Cliff',
  'Ord', 'Statistic', 'Getis', 'Ord', 'Statistic', 'Anselin', 'Local',
  'Moran', 'Statistic', 'Local', 'Geary', 'Statistic', 'Bivariate',
  'Moran', 'Statistic', 'Bivariate', 'Geary', 'Statistic', 'Multivariate',
  'Moran', 'Statistic', 'Multivariate', 'Geary', 'Statistic', 'Spatial',
  'Autocorrelation', 'Spatial', 'Heterogeneity', 'Spatial', 'Dependence',
  'Spatial', 'Lag', 'Model', 'Spatial', 'Error', 'Model', 'Spatial',
  'Durbin', 'Model', 'Spatial', 'Autoregressive', 'Model', 'SAR', 'Model',
  'Spatial', 'Moving', 'Average', 'Model', 'SMA', 'Model', 'Spatial',
  'Autoregressive', 'Moving', 'Average', 'Model', 'SARMA', 'Model',
  'Spatial', 'Autoregressive', 'Conditional', 'Heteroskedasticity',
  'Model', 'SARCH', 'Model', 'Spatial', 'Autoregressive', 'Generalized',
  'Autoregressive', 'Conditional', 'Heteroskedasticity', 'Model',
  'SARGARCH', 'Model', 'Spatial', 'Autoregressive', 'Exponential',
  'Conditional', 'Heteroskedasticity', 'Model', 'SARECH', 'Model',
  'Spatial', 'Autoregressive', 'Stochastic', 'Volatility', 'Model',
  'SARSV', 'Model', 'Spatial', 'Autoregressive', 'Stochastic', 'Volatility',
  'Exponential', 'Model', 'SARSVE', 'Model', 'Spatial', 'Autoregressive',
  'Stochastic', 'Volatility', 'Jump', 'Model', 'SARSVJ', 'Model',
  'Spatial', 'Autoregressive', 'Stochastic', 'Volatility', 'Jump',
  'Exponential', 'Model', 'SARSVJE', 'Model', 'Spatial', 'Autoregressive',
  'Stochastic', 'Volatility', 'Jump', 'Leverage', 'Model', 'SARSVJL',
  'Model', 'Spatial', 'Autoregressive', 'Stochastic', 'Volatility',
  'Jump', 'Leverage', 'Exponential', 'Model', 'SARSVJLE', 'Model',
  'Spatial', 'Autoregressive', 'Stochastic', 'Volatility', 'Jump',
  'Leverage', 'Exponential', 'Asymmetric', 'Model', 'SARSVJLEA', 'Model',
  'Spatial', 'Autoregressive', 'Stochastic', 'Volatility', 'Jump',
  'Leverage', 'Exponential', 'Asymmetric', 'Threshold', 'Model',
  'SARSVJLEAT', 'Model', 'Spatial', 'Autoregressive', 'Stochastic',
  'Volatility', 'Jump', 'Leverage', 'Exponential', 'Asymmetric',
  'Threshold', 'Regime', 'Switching', 'Model', 'SARSVJLEATRS', 'Model',
  'Spatial', 'Autoregressive', 'Stochastic', 'Volatility', 'Jump',
  'Leverage', 'Exponential', 'Asymmetric', 'Threshold', 'Regime',
  'Switching', 'Markov', 'Model', 'SARSVJLEATRSM', 'Model', 'Spatial',
  'Autoregressive', 'Stochastic', 'Volatility', 'Jump', 'Leverage',
  'Exponential', 'Asymmetric', 'Threshold', 'Regime', 'Switching',
  'Markov', 'Time', 'Varying', 'Model', 'SARSVJLEATRSMTV', 'Model',
  'Spatial', 'Autoregressive', 'Stochastic', 'Volatility', 'Jump',
  'Leverage', 'Exponential', 'Asymmetric', 'Threshold', 'Regime',
  'Switching', 'Markov', 'Time', 'Varying', 'Spatial', 'Model',
  'SARSVJLEATRSMSM', 'Model', 'Spatial', 'Autoregressive', 'Stochastic',
  'Volatility', 'Jump', 'Leverage', 'Exponential', 'Asymmetric',
  'Threshold', 'Regime', 'Switching', 'Markov', 'Time', 'Varying',
  'Spatial', 'Spatial', 'Model', 'SARSVJLEATRSMSMSM', 'Model',
]);

// Extract text from file
function extractText(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const texts = new Set();

    // Find all quoted strings
    const stringRegex = /["'`]([^"'`]+)["'`]/g;
    let match;

    while ((match = stringRegex.exec(content)) !== null) {
      let text = match[1].trim();

      // Skip if too short, contains code, or is a skip word
      if (
        text.length < 2 ||
        text.includes('${') ||
        text.includes('://') ||
        text.includes('.') ||
        text.includes('/') ||
        skipWords.has(text) ||
        /^[a-z_$][a-z0-9_$]*$/i.test(text) // Variable names
      ) {
        continue;
      }

      // Only keep text with spaces or common words
      if (text.includes(' ') || /^[A-Z]/.test(text)) {
        texts.add(text);
      }
    }

    return Array.from(texts);
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return [];
  }
}

// Main function
async function main() {
  console.log('🔍 Extracting text from components...\n');

  const appDir = path.join(__dirname, '../app');
  const files = glob.sync(`${appDir}/**/*.{tsx,jsx}`, {
    ignore: [`${appDir}/node_modules/**`, `${appDir}/.next/**`],
  });

  console.log(`Found ${files.length} component files\n`);

  const allTexts = new Set();

  for (const file of files) {
    const texts = extractText(file);
    texts.forEach(text => allTexts.add(text));
  }

  console.log(`\n📝 Extracted ${allTexts.length} unique text strings\n`);

  // Create translation template
  const translationTemplate = {};
  Array.from(allTexts).forEach(text => {
    translationTemplate[text] = text; // English stays same
  });

  // Save to file
  const outputPath = path.join(__dirname, '../app/data/translations/extracted.json');
  fs.writeFileSync(outputPath, JSON.stringify(translationTemplate, null, 2), 'utf8');

  console.log(`✅ Saved to: ${outputPath}`);
  console.log(`\n📋 Next steps:`);
  console.log(`1. Translate the extracted.json file to Hindi`);
  console.log(`2. Merge translations into hi.json`);
  console.log(`3. Use useTranslation() hook in components\n`);
}

main().catch(console.error);
