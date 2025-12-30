//@ts-ignore
import * as luaparse from 'luaparse';

export interface LuaBeautificationResult {
    error: boolean;
    error_message: string;
    beautified: string;
}

export const beautify_lua = (code: string): LuaBeautificationResult => {
    try {
        luaparse.parse(code);
    } catch (e: any) {
        return { error: true, error_message: e.message, beautified: '' };
    }
    
    let expanded = code
        .replace(/\)\s+(print|local|return|if|for|while|repeat)/g, ')\n$1')
        .replace(/\b(then|do)\s+(?!end)/g, '$1\n')
        .replace(/\s+(else)\s+/g, '\n$1\n')
        .replace(/\s+(elseif)\s+/g, '\n$1 ')
        .replace(/\s+(end)\b/g, '\n$1')
        .replace(/;\s*/g, '\n');
    
    let indent = 0;
    const indent_str = '    ';
    
    const beautified = expanded.split(/\r?\n/).map(line => {
        const trimmed = line.trim();
        if (!trimmed) return '';
        
        // decrease BEFORE printing
        if (/^(end|until|\})/.test(trimmed)) {
            indent = Math.max(0, indent - 1);
        } else if (/^(else|elseif)\b/.test(trimmed)) {
            indent = Math.max(0, indent - 1);
        }
        
        const formatted_line = indent_str.repeat(indent) + trimmed;
        
        // increase AFTER printing
        if (/^(else|elseif)\b/.test(trimmed)) {
            indent++;
        } else if (/\b(function|then|do|repeat)\b/.test(trimmed) && !/\bend\b/.test(trimmed)) {
            indent++;
        } else if (/\{\s*$/.test(trimmed)) {
            indent++;
        }
        
        return formatted_line;
    }).filter(line => line !== '').join('\n');
    
    return { error: false, error_message: '', beautified };
}