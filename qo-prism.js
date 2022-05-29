Prism.languages['qo'] = {
    'comment': /(\/\*[^\*\/]*\*\/)/s,
    'string': /("[^"]*"|'[^']*')/s,
	'keyword': /(func|elif|if|else|return|foreach|for|while|times|import|define)/,
    'number': /([0-9]+)/,
    'function': /([a-zA-Z0-9_]+)(?=\()/,
    'important': /(__export__)/,
    'variable': /([a-zA-Z0-9_]+)/,
	'builtin': /(println|print|input|toInt|toStr|toBool|type|exit|mod|None|exportAll)/,
    'boolean': /(True|False)/,
    'operator': /(\+|-|\*|\/|=|<|>|<=|>=|==|!=|as|in|&|%|&&|\|\|\+=)/,
    'punctuation': /(\(|\)|,|\[|\]|;|:|{|})/,
};