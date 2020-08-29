(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+73+":function(e,t,a){e.exports={layout:"DocLayout-module--layout--2m-0z",main:"DocLayout-module--main--3L6xJ"}},"0Lf/":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a("q1tI"),l=a.n(n),i=a("ATu/"),r=a("RgaQ"),o=a("kj4A"),s=a.n(o),c=a("Dbk4"),m=a.n(c);function u(){var e="\n# Using npm\nnpm install @joeattardi/emoji-button\n\n# Using yarn\nyarn add @joeattardi/emoji-button\n".trim();return l.a.createElement(i.a,null,l.a.createElement("h1",null,"Documentation"),l.a.createElement("p",null,"Emoji Button is a vanilla JavaScript emoji picker component. It displays a panel of emojis where one can be selected. What is done with the selected emoji is up to you."),l.a.createElement("h1",null,"Installation"),l.a.createElement("p",null,"Emoji Button is published as an npm package, and can be installed with npm or Yarn."),l.a.createElement("pre",null,l.a.createElement("code",{className:"language-bash"},e)),l.a.createElement("h1",null,"Basic usage"),l.a.createElement("p",null,"First, you'll need a trigger element. This is typically a button, and is used to toggle the emoji picker."),l.a.createElement(r.a,{src:s.a}),l.a.createElement("p",null,"Once you've added the trigger, you need to import the"," ",l.a.createElement("code",null,"EmojiButton")," class and create a new instance. Various options can be passed to the constructor, which will be shown in future examples."),l.a.createElement(r.a,{src:m.a}),l.a.createElement("p",null,"To show the picker, call ",l.a.createElement("code",null,"showPicker")," or"," ",l.a.createElement("code",null,"togglePicker")," on the ",l.a.createElement("code",null,"EmojiButton")," instance. The picker will appear and the user can select an emoji. When an emoji is selected, the ",l.a.createElement("code",null,"EmojiButton")," instance will emit an"," ",l.a.createElement("code",null,"emoji")," event. You can listen for this event by calling"," ",l.a.createElement("code",null,"on")," on the instance, and then handle the selected emoji however you want."),l.a.createElement("p",null,"When the picker is visible, there are several ways it can be closed:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Select an emoji (unless the ",l.a.createElement("code",null,"autoHide")," option is set to"," ",l.a.createElement("code",null,"false"),")"),l.a.createElement("li",null,"Click anywhere outside of the picker"),l.a.createElement("li",null,"Press the Escape key"),l.a.createElement("li",null,"Call the ",l.a.createElement("code",null,"hidePicker")," or ",l.a.createElement("code",null,"togglePicker")," methods on the picker instance.")),l.a.createElement("p",null,"The ",l.a.createElement("code",null,"showPicker")," and ",l.a.createElement("code",null,"togglePicker")," methods expect a reference element as their first argument. The reference element is used to calculate the picker's position on screen. The picker will be positioned relative to the reference element."),l.a.createElement("p",null,"The argument to the ",l.a.createElement("code",null,"emoji")," will be an object with an"," ",l.a.createElement("code",null,"emoji")," property, which contains the selected emoji character. You can then handle this emoji as you see fit."))}},"ATu/":function(e,t,a){"use strict";a.d(t,"a",(function(){return S}));var n=a("q1tI"),l=a.n(n),i=a("wZee"),r=a.n(i),o=(a("Veyx"),a("qhky")),s=a("Wbzz"),c=a("3aSG"),m=a.n(c),u=a("IgYj"),d=a.n(u);function p(){return l.a.createElement("nav",{className:d.a.sidebar},l.a.createElement("div",{className:d.a.logo},l.a.createElement(s.a,{to:"/"},l.a.createElement("img",{src:m.a}))),l.a.createElement("h2",null,"Documentation"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs"},"Home")),l.a.createElement("li",null,l.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs/styles"},"Styles")),l.a.createElement("li",null,l.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs/custom"},"Custom Emojis")),l.a.createElement("li",null,l.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs/icons"},"Custom Icons")),l.a.createElement("li",null,l.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs/plugins"},"Plugins")),l.a.createElement("li",null,l.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs/themes"},"Themes")),l.a.createElement("li",null,l.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs/recents"},"Recent Emojis")),l.a.createElement("li",null,l.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs/variants"},"Variants")),l.a.createElement("li",null,l.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs/position"},"Positioning")),l.a.createElement("li",null,l.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs/customize"},"Customization")),l.a.createElement("li",null,l.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs/i18n"},"I18N Strings"))),l.a.createElement("h2",null,"Reference"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs/api"},"API")),l.a.createElement("li",null,l.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs/events"},"Events"))))}var E=a("+73+"),h=a.n(E);function S(e){var t=e.children;return Object(n.useEffect)((function(){r.a.highlightAll()}),[]),l.a.createElement("div",{className:h.a.layout},l.a.createElement(o.a,null,l.a.createElement("title",null,"Emoji Button")),l.a.createElement(p,null),l.a.createElement("main",{className:h.a.main},t))}},Dbk4:function(e,t){e.exports="import { EmojiButton } from '@joeattardi/emoji-button';\n\nconst picker = new EmojiButton();\nconst trigger = document.querySelector('.trigger');\n\npicker.on('emoji', selection => {\n  // `selection` object has an `emoji` property\n  // containing the selected emoji\n});\n\ntrigger.addEventListener('click', () => picker.togglePicker(trigger));\n"},IgYj:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--2OrhV",logo:"Sidebar-module--logo--2CVgv",active:"Sidebar-module--active--1dRAY"}},RgaQ:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("dKDz"),l=a.n(n),i=a("q1tI"),r=a.n(i);function o(e){var t=e.src;return r.a.createElement("pre",null,r.a.createElement("code",{className:"language-javascript",dangerouslySetInnerHTML:{__html:l()(t)}}))}},Veyx:function(e,t,a){a("Oyvg"),function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b\w+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\2)[^\\])*\2/,lookbehind:!0,greedy:!0,inside:a}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}};for(var n=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],l=a.variable[1].inside,i=0;i<n.length;i++)l[n[i]]=e.languages.bash[n[i]];e.languages.shell=e.languages.bash}(Prism)},dKDz:function(e,t,a){"use strict";var n=/["'&<>]/;e.exports=function(e){var t,a=""+e,l=n.exec(a);if(!l)return a;var i="",r=0,o=0;for(r=l.index;r<a.length;r++){switch(a.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(i+=a.substring(o,r)),o=r+1,i+=t}return o!==r?i+a.substring(o,r):i}},kj4A:function(e,t){e.exports='<button class="trigger">Emoji</button>\n'}}]);
//# sourceMappingURL=component---src-pages-docs-index-js-963e3efe6e3f625060b5.js.map