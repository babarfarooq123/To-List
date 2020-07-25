function addToList(){
    var liElement = document.createElement('li')
    var addItem = document.querySelector('.addText').value;
    if(addItem == ''){
        alert("Khali submit honay nahi doonga!")
    }else{
        var addInList = document.getElementsByTagName('ul')[0]
        console.log(addInList)
        addInList.setAttribute('class','ulStyle')

        var mainDiv = document.createElement('div')
        mainDiv.setAttribute('class','mainaddDel')
        var childDiv = document.createElement('div')
        childDiv.setAttribute('class','addDel1')
        mainDiv.appendChild(childDiv)

        var child1Div = document.createElement('div')
        child1Div.setAttribute('class','childer')
        var child2Div = document.createElement('div')
        child2Div.setAttribute('class','childer')
        childDiv.appendChild(child1Div)
        childDiv.appendChild(child2Div)
        var d = new Date()
        var day = d.getDay()+1
        var month = d.getMonth()
        switch(month){
            case 0:
                month = 'Jan'
                break
            case 1:
                month = 'Feb'
                break
            case 2:
                month = 'Mar'
                break
            case 3:
                month = 'Apr'
                break
            case 4:
                month = 'May'
                break
            case 5:
                month = 'Jun'
                break
            case 6:
                month = 'Jul'
                break
            case 7:
                month = 'Aug'
                break
            case 8:
                month = 'Sep'
                break
            case 9:
                month = 'Oct'
                break
            case 10:
                month = 'Nov'
                break
            case 11:
                month = 'Dec'
                break
        }
        var h4 = document.createElement('h2')
        var text1 = document.createTextNode(day+' '+month)
        h4.appendChild(text1)
        child1Div.appendChild(h4)
        var h42 = document.createElement('h2')
        var text2 = document.createTextNode(addItem)
        h42.appendChild(text2)
        child2Div.appendChild(h42)
        liElement.appendChild(mainDiv)
        var delbtn = document.createElement('button')
        delbtn.setAttribute('class','delbutton')
        delbtn.setAttribute('onclick','delsingle(this)')
        var tnode = document.createTextNode('X')
        delbtn.appendChild(tnode)
        liElement.appendChild(delbtn)
        addInList.appendChild(liElement)
    }
}

function deleteList(){
    document.getElementsByTagName('ul')[0].innerHTML = ''
}

function delsingle(e){
    var single = e.parentNode
    single.remove()
}