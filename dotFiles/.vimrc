syntax enable

set expandtab
set tabstop=4		" interpret TAB as 4 spaces
set softtabstop=4	" write 4 spaces when editing for each TAB
set shiftwidth=4

set number
set showcmd		    " show last executed command in bottom right
filetype indent on	" filetype detection and filetype specific indentation rules
set wildmenu		" visual autocomplete on command menu
set showmatch		" highlight matching parenthesies
set incsearch       " search as characters typed
set hlsearch        " highlight search matches
set backspace=2
set backspace=indent,eol,start

vnoremap < <gv
vnoremap > >gv

" let base16colorspace=256  " Access colors present in 256 colorspace

if filereadable(expand("~/.vimrc_background"))
    let base16colorspace=256
    source ~/.vimrc_background
endif

hi MatchParen cterm=NONE ctermbg=cyan ctermfg=black
