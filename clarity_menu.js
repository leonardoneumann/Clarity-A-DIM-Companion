window.addEventListener('header_ready', () => info_button())
//  (っ◔◡◔)っ
document.querySelector('html').append(element_creator('style', {'id': 'clarity_dark_mode'})) // create place for dark mode css
function info_button() {
    const jd = local_storage('clarity_settings').class_names.locations
    let clarity_menu = element_creator('div', {'textContent': 'Clarity menu', 'className': 'Clarity_menu_button'}) // create button 'Clarity menu'

    let new_menu       = element_creator('div',{'className':'Clarity_new_menu'})
    let sheet_img      = element_creator('img',{}, {'img': 'images/spreadsheet.png'})
    // let range_calc_img = element_creator('img',{}, {'img': 'images/range_calc.png'})
    // let pip1n_img      = element_creator('img',{}, {'img': 'images/pip1n.png'})
    // let court_img      = element_creator('img',{}, {'img': 'images/court.png'})
    let gunsmith_img   = element_creator('img',{}, {'img': 'images/gunsmith.png'})
    function create_top_text() {
        let top_text_box = element_creator('div', {'className': 'Clarity_menu_top_text'})

        let top_text     = element_creator('div', {'textContent': 'Extension is created and maintained by Icemourne\nYou can report bugs and ask for new features on '})
        let discord_link = element_creator('a',   {'textContent': 'Discord', 'target': '_blank', 'href': 'https://discord.gg/43TPU5ehmP'})
        top_text.append(discord_link)
        top_text_box.append(top_text)
        return top_text_box
    }

    let sources_box = fragment_creator([
        {
            // ele_type: 'div',
            className: 'Clarity_links_box',
            append: [
                { // sources_box_text
                    // ele_type: 'div',
                    textContent: 'Links to Sources used creating this extension',
                    className: 'Clarity_menu_box_name'
                },
                { // Pip1n img
                    ele_type: 'img',
                    local_img: 'images/pip1n.png',
                },
                { // Pip1n
                    ele_type: 'a',
                    textContent: 'Mods, Abilities, and More by Pip1n',
                    target: '_blank',
                    href: 'https://docs.google.com/spreadsheets/d/1WaxvbLx7UoSZaBqdFr1u32F2uWVLo-CJunJB4nlGUE4/'
                },
                { // Court img
                    ele_type: 'img',
                    local_img: 'images/court.png',
                },
                { // Court
                    ele_type: 'a',
                    textContent: 'Damage Buffs, Debuffs, and Modifiers by Court',
                    target: '_blank',
                    href: 'https://docs.google.com/spreadsheets/d/1i1KUwgVkd8qhwYj481gkV9sZNJQCE-C3Q-dpQutPCi4/'
                },
                { // Van_Holden & sereni img
                    ele_type: 'img',
                    local_img: 'images/sereni.png',
                },
                { // Van_Holden & sereni
                    ele_type: 'a',
                    textContent: 'Reload Speed started by Van Holden',
                    target: '_blank',
                    href: 'https://docs.google.com/spreadsheets/d/13heG_rKRB9UU5DpvRbl1q11WGFs8QPPzpFA60uIOT8w/'
                },
                { // Mmonx img
                    ele_type: 'img',
                    local_img: 'images/range_calc.png',
                },
                { // Mmonx
                    ele_type: 'a',
                    textContent: 'Weapon Range Calculator by Mmonx',
                    target: '_blank',
                    href: 'https://destinyindepth.com/range_calculator/'
                },
            ]
        }
    ])

    function create_useful_links_box() {
        let useful_links_box = element_creator('div', {'className': 'Clarity_links_box'})

        let useful_links_box_text = element_creator('div', {'textContent': 'Other useful links', 'className': 'Clarity_menu_box_name'})

        let D2_Gunsmith = element_creator('a', {'textContent': 'D2 Gunsmith by dre',                'target': '_blank', 'href': 'https://d2gunsmith.com/'})
        let Mercules904 = element_creator('a', {'textContent': 'Weapon Stats & TTK by Mercules904', 'target': '_blank', 'href': 'https://docs.google.com/spreadsheets/d/1_6zsM7kzvg0aUT8YtM_-Wg_5K1gKDOlrwfVzutEjq-s/'})
        let SkyWarrior  = element_creator('a', {'textContent': 'Weapon DPS by SkyWarrior',          'target': '_blank', 'href': 'https://docs.google.com/spreadsheets/d/12vF7ckMzN4hex-Tse4HPiVs_d9huFOKlvUoq5V41nxU/'})

        useful_links_box.append(useful_links_box_text, gunsmith_img, D2_Gunsmith, sheet_img.cloneNode(), Mercules904, sheet_img.cloneNode(), SkyWarrior)
        return useful_links_box
    }
    function create_settings_box() {
        let settings_box = element_creator('div', {'className': 'Clarity_settings_box'})

        let settings_box_text = element_creator('div', {'textContent': 'Settings', 'className': 'Clarity_menu_box_name'})

        let dark_mode_display = (local_storage('clarity_settings').dark_mode) ? 'Disable' : 'Enable'
        let dark_mode_button = element_creator('div', {'textContent': `${dark_mode_display} Dark Mode`, 'id': 'dark_mode_toggle'})
        dark_mode_button.addEventListener('click', dark_mode_toggle)

        settings_box.append(settings_box_text, dark_mode_button)
        return settings_box
    }
    function create_dark_mode_settings_box() {
        let dark_mode_settings_box = element_creator('div', {'className': 'dark_mode_settings_box'})

        let dark_mode_settings_box_text = element_creator('div', {'textContent': 'Dark mode color selection', 'className': 'Clarity_menu_box_name'})

        let dark_mode_values = local_storage('clarity_settings').dark_mode_colors
        let dark_mode_elements = [
            element_creator('label', {'textContent': 'Background color 1'}),
            element_creator('input', {'value': dark_mode_values.background_color_1, 'className': 'Clarity_color_input'}),
            element_creator('label', {'textContent': 'Background color 2'}),
            element_creator('input', {'value': dark_mode_values.background_color_2}),
            element_creator('label', {'textContent': 'Masterwork color'}),
            element_creator('input', {'value': dark_mode_values.masterwork_item}),
            element_creator('label', {'textContent': 'Masterwork text'}),
            element_creator('input', {'value': dark_mode_values.masterwork_item_text})
        ]

        dark_mode_settings_box.append(dark_mode_settings_box_text, ...dark_mode_elements, save_button())
        return dark_mode_settings_box
    }
    function save_button() {
        let button = element_creator('button', {'textContent': 'Save'})
        button.addEventListener('click', () => {
            let input = document.querySelectorAll('.dark_mode_settings_box > input')
            update_clarity_settings('dark_mode_colors', {
                'background_color_1':   input[0].value,
                'background_color_2':   input[1].value,
                'masterwork_item':      input[2].value,
                'masterwork_item_text': input[3].value
            })
            dark_mode()
        })
        return button
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    new_menu.append(create_top_text(), sources_box, create_useful_links_box(), create_settings_box(), create_dark_mode_settings_box())
    clarity_menu.append(new_menu)
    document.querySelector(jd.dim_header).prepend(clarity_menu)

    open_close()
}
function open_close() {
    let button = document.querySelector('.Clarity_menu_button')
    button.addEventListener('click', event => {
        if(event.target.classList.contains('Clarity_menu_button')) event.currentTarget.lastChild.classList.toggle('Clarity_show_menu')
    })
    document.addEventListener('click', event => {
        if(event.path.find(element => element.classList?.contains('Clarity_menu_button'))) return
        let menu_window = document.querySelector('.Clarity_new_menu')
        menu_window.classList.remove('Clarity_show_menu')
    })
}
if (local_storage('clarity_settings').dark_mode) dark_mode()
function dark_mode(){
    const settings = local_storage('clarity_settings')
    const colors = settings.dark_mode_colors
    const jd = settings.class_names.styles

    document.documentElement.style.setProperty('--clarity_background_1', colors.background_color_1);
    document.documentElement.style.setProperty('--clarity_background_2', colors.background_color_2);
    document.documentElement.style.setProperty('--clarity_masterwork_item', colors.masterwork_item);
    document.documentElement.style.setProperty('--clarity_masterwork_item_text', colors.masterwork_item_text);

    const background_color = `{background: radial-gradient(circle at 50% 70px, var(--clarity_background_1) 0%, var(--clarity_background_2) 100%); background-position: center top; background-repeat: no-repeat; background-size: 100vw 100vh;}`
    document.getElementById('clarity_dark_mode').textContent = `
    ${jd.background_color[0]} ${background_color}
    ${jd.background_color[1]} ${background_color}
    ${jd.background_color[2]} ${background_color}
    ${jd.background_color[3]} ${background_color}

    ${jd.items.background}            {background-color: hsla(0, 0%, 0%, 0); color: hsl(0, 0%, 85%);}
    ${jd.items.masterwork_background} {background-color: var(--clarity_masterwork_item); color: var(--clarity_masterwork_item_text);}
    ${jd.items.item_image_border}     {border: 1px solid hsla(0, 0%, 0%, 0);}
    ${jd.items.thumbs_up_icon}        {color: hsl(202, 81%, 39%);}
    `
    // ${jd.organizer_background}    {background-color: hsl(0deg, 0%, 0%, 0.3);}
    // ${jd.masterwork_item_image}   {border: 1px solid var(--clarity_masterwork_item);}
}
function dark_mode_toggle() {
    let dark_mode_button = document.getElementById('dark_mode_toggle')
    if (dark_mode_button.textContent == 'Enable Dark Mode') {
        update_clarity_settings('dark_mode', true)
        dark_mode_button.textContent = 'Disable Dark Mode'
        dark_mode()
    } else {
        update_clarity_settings('dark_mode', false)
        dark_mode_button.textContent = 'Enable Dark Mode'
        document.getElementById('clarity_dark_mode').textContent = ''
    }
}