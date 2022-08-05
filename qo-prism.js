Prism.languages['qo'] = {
    'comment': /(\/\*[^\*\/]*\*\/)|(#.+[^$])/,
    'string': /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/s,
	'builtin': /(?<![a-zA-Z0-9_])(println|print|input|exit|hasAttr|exists|remove|None|chr|len|__main__|__qcf__)(?![a-zA-Z0-9_])/,
	'keyword': /(func|elif|if|else|return|foreach|for|while|times|include|define)/,
    'number': /([0-9]+)/,
    'function': /([a-zA-Z0-9_]+)(?=\()/,
    'important': /(__export__|(?=include )[a-zA-Z0-9_]+)/,
    'operator': /(\+|-|\*|\/|=|<|>|<=|>=|==|!=| as | in |&|%|&&|\|\|\+=|\*\*)/,
    'variable': /([a-zA-Z0-9_]+)/,
    'boolean': /(True|False)/,
    'punctuation': /(\(|\)|,|\[|\]|;|:|{|}|.)/,
};