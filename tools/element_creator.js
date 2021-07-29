/**
 ** Place commands in object {'ele_type': '', 'location': ''}
 ** 'location': ''      > where to pace element query selector format
 ** 'stat_window': ''   > same as above but in stats window
 ** 'ele_type': ''      > type of element to create
 ** 'text': ''          > text content 
 ** 'id': ''            > id
 ** 'class': ''         > class name
 ** 'css': ''           > style.cssText adds css text
 ** 'href': ''          > link to what ever
 ** 'src': ''           > source img link or what ever you need
 ** 'img': ''           > adds locally stored img
 ** 'type': ''          > type of attribute to add
 ** 'target': ''        > used with href '_blank' to open link in new page
 */
function create_element(p) {
    let e = document.createElement(p['ele_type'])
    if(p['text'])   e.textContent =   p['text'] // text to place in element
    if(p['id'])     e.id =            p['id'] // id of element
    if(p['class'])  e.className =     p['class'] // class name of element
    if(p['css'])    e.style.cssText = p['css'] // css as text
    if(p['href'])   e.href =          p['href'] // link google.com or what ever
    if(p['src'])    e.src =           p['src']
    if(p['img'])    e.src =           chrome.runtime.getURL(p['img'])
    if(p['type'])   e.type =          p['type']
    if(p['target']) e.target =        p['target'] // used with href '_blank' to open link in new page
    if(p['title'])  e.title =         p['title']
    switch (true) {
        case p['location'] != undefined:
            let location = document.querySelector(p['location'])
            location.appendChild(e)
            break
        case p['stat_window'] != undefined:
            let stat_window = get_in_content(p['stat_window'])
            stat_window.appendChild(e)
            break
        // ------------------------- used only one time
        case p['loc_before'] != undefined:
            let loc_before = document.querySelector(p['loc_before'])
            loc_before.parentElement.insertBefore(e, loc_before)
            break
        case p['sw_before_last'] != undefined:
            let last_hare = document.getElementById('content').nextSibling.querySelectorAll(p['sw_before_last']) // place to look
            let last_element = last_hare[last_hare.length - 1] // location of last 
            last_element.parentElement.insertBefore(e, last_element) // it will insert before last
            break
    }
}

function element_creator(type, properties, extra) {
    let element = document.createElement(type)
    Object.entries(properties).forEach(property => {
        element[property[0]] = property[1]
    })
    if(extra && extra.img) element.src = chrome.runtime.getURL(extra.img)
    return element
}
