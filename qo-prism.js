Prism.languages['qo'] = {
    'comment': /(\/\*[^\*\/]*\*\/)|(#.+[^$])/,
    'string': /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/s,
	'builtin': /(?<![a-zA-Z0-9_])(print|println|input|exit|hasAttr|exists|remove|move|sleep|len|chr|ord|__main__|__qcf__|None)(?![a-zA-Z0-9_])/,
	'keyword': /(?<![a-zA-Z0-9_])(func|elif|if|else|return|foreach|for|while|times|include|define)(?![a-zA-Z0-9_])/,
    'number': /([0-9]+)/,
    'function': /([a-zA-Z0-9_]+)(?=\()/,
    'important': /(__export__|(?=include )[a-zA-Z0-9_]+)/,
    'operator': /(\+|-|\*|\/|=|<|>|<=|>=|==|!=| as | in |&|%|&&|\|\|\+=|\*\*)/,
    'variable': /([a-zA-Z0-9_]+)/,
    'boolean': /(True|False)/,
    'punctuation': /(\(|\)|,|\[|\]|;|:|{|}|.)/,
};