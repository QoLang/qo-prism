Prism.languages['qo'] = {
    'comment': /(\/\*[^\*\/]*\*\/)/s,
    'string': /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/s,
	'keyword': /(func|elif|if|else|return|foreach|for|while|times|include|define)/,
    'number': /([0-9]+)/,
    'function': /([a-zA-Z0-9_]+)(?=\()/,
    'important': /(__export__|(?=include )[a-zA-Z0-9_]+)/,
    'operator': /(\+|-|\*|\/|=|<|>|<=|>=|==|!=| as | in |&|%|&&|\|\|\+=|\*\*)/,
    'variable': /([a-zA-Z0-9_]+)/,
	'builtin': /(println|print|input|toInt|toStr|toBool|type|exit|mod|hasAttr|exists|remove|None|exportAll|__main__|__qcf__)/,
    'boolean': /(True|False)/,
    'punctuation': /(\(|\)|,|\[|\]|;|:|{|}|.)/,
};