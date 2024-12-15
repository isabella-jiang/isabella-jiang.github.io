document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', () => {
        document.querySelectorAll('.icon').forEach(i => i.classList.remove('selected'));
        icon.classList.add('selected');
    });

    icon.addEventListener('dblclick', () => {
        const windowId = icon.getAttribute('data-window') + '-window';
        const win = document.getElementById(windowId);
        if (win) {
            win.style.display = 'flex';

            if (icon.getAttribute('data-window') === 'photos' || icon.getAttribute('data-window') === 'gif' || icon.getAttribute('data-window') === 'downgrade' || icon.getAttribute('data-window') === 'mail' || icon.getAttribute('data-window') === 'game' || icon.getAttribute('data-window') === 'applet' || icon.getAttribute('data-window') === 'cooking') {
                win.classList.add('maximized');
                win.style.left = '0';
                win.style.top = '0';
                win.style.width = '100vw';
                win.style.height = 'calc(100vh - 50px)';
            } else {
            win.classList.remove('maximized');
            }
        }
    });
});

document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', (e) => {
        e.target.closest('.window').style.display = 'none';
    });
});

// document.querySelectorAll('.minimize').forEach(button => {
//     button.addEventListener('click', (e) => {
//         const win = e.target.closest('.window');
//         win.style.display = 'none';
//         // have to add taskbar tabs for minned windows
//     });
// });

document.querySelectorAll('.maximize').forEach(button => {
    button.addEventListener('click', (e) => {
        const win = e.target.closest('.window');
        
        if (!win.classList.contains('maximized')) {
            win.style.left = '0';
            win.style.top = '0';
            win.style.width = '100vw';
            win.style.height = 'calc(100vh - 50px)';
            win.classList.add('maximized');
        } else {
            win.style.left = '';
            win.style.top = '';
            win.style.width = '';
            win.style.height = '';
            win.classList.remove('maximized');
        }
    });
});

//start menu
document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('start-menu').classList.toggle('hidden');
});

// // start menu items
// document.querySelectorAll('#start-menu li').forEach(item => {
//     item.addEventListener('click', () => {
//         const windowId = item.getAttribute('data-window') + '-window';
//         const win = document.getElementById(windowId);
//         if (win) {
//             win.classList.remove('hidden');
//             win.style.display = 'flex';
//         }
//     });
// });

// home button
document.getElementById('home-button').addEventListener('click', () => {
    document.querySelectorAll('.window').forEach(win => {
        win.classList.add('hidden');
        win.style.display = 'none';
    });
});

// drag
document.querySelectorAll('.window-header').forEach(header => {
    let offsetX, offsetY, draggedWindow;

    header.addEventListener('mousedown', (e) => {
        draggedWindow = header.parentElement;
        if (draggedWindow.classList.contains('maximized')) return; // no drag when maxxed
        
        offsetX = e.clientX - draggedWindow.offsetLeft;
        offsetY = e.clientY - draggedWindow.offsetTop;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMove(e) {
        draggedWindow.style.left = (e.clientX - offsetX) + 'px';
        draggedWindow.style.top = (e.clientY - offsetY) + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
});
