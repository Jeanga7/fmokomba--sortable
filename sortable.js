document.addEventListener('DOMContentLoaded', function() {
    const all = document.querySelectorAll('*')
    all.forEach(item => {
        item.style.margin = '0'
        item.style.padding = '0'
        item.style.boxSizing = 'border-box'
    })

    // Main block
    const container = document.createElement('div')
    container.style.marginBottom = '24px'
    container.style.display = 'flex'
    container.style.justifyContent = 'center'
    container.style.alignItems = 'center'
    container.style.flexDirection = 'column'

    // Main title
    const h1 = document.createElement('h1')
    h1.style.fontSize = '3.5vw'
    h1.style.color = '#39b2b2'
    h1.textContent = 'SORTABLE'
    h1.style.letterSpacing = '1rem'

    // Sort and Search block
    const div = document.createElement('div')
    div.style.boxSizing = 'border-box'
    div.style.padding = '24px 0'
    div.style.background = '#cfeeee'
    div.style.color = '#012020'
    div.style.fontWeight = 'bold'
    div.style.width = '100%'
    div.style.display = 'flex'
    div.style.justifyContent = 'center'
    div.style.alignItems = 'center'
    div.style.letterSpacing = '.1rem'
    div.style.fontSize = '1.2rem'
    div.style.position = 'sticky'
    div.style.top = '0'

    // Search block
    const divChild1 = document.createElement('div')
    divChild1.style.boxSizing = 'border-box'
    divChild1.style.width = '30%'
    divChild1.style.margin = '0 12px'
    divChild1.style.display = 'flex'
    divChild1.style.flexDirection = 'column'

    const label1 = document.createElement('label')
    label1.setAttribute('for','search')
    label1.textContent = 'Filter by name'
    label1.style.marginBottom = '10px'

    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.id = 'search'
    input.style.border = 'none'
    input.style.borderRadius = '7px'
    input.setAttribute('placeholder', 'Search')
    input.style.padding = '12px'
    input.style.color = '#012020'
    input.style.outline = 'none'
    input.style.fontFamily = 'Times New Roman, serif'
    input.style.fontSize = '1.1rem'
    divChild1.appendChild(label1)
    divChild1.appendChild(input)


    // Display block
    const divChild2 = document.createElement('div')
    divChild2.style.boxSizing = 'border-box'
    //divChild2.style.width = '50%'
    divChild2.style.margin = '0 12px'
    divChild2.style.display = 'flex'
    divChild2.style.flexDirection = 'column'

    const label2 = document.createElement('label')
    label2.setAttribute('for','sort')
    label2.textContent = 'Display by'
    label2.style.marginBottom = '10px'

    const select = document.createElement('select')
    select.id ='size'
    select.style.border = 'none'
    select.style.borderRadius = '7px'
    select.style.padding = '12px'
    select.style.background = '#ffffff'
    select.style.color = '#012020'
    select.style.outline = 'none'
    select.style.fontFamily = 'Times New Roman, serif'
    select.style.fontSize = '1.1rem'

    // Creating option's values
    const options = ['10', '20', '50', '100', 'All'].map((value) => {
        const item = document.createElement('option')
        item.selected = (value === '20')
        item.value = (value === 'All')? '10000000' : value
        item.textContent = value
        return item
    })

    // Appendding options to select
    options.forEach(option => {
        select.appendChild(option)
    })
    divChild2.appendChild(label2)
    divChild2.appendChild(select)

    // Table block
    const divTable = document.createElement('div')
    divTable.style.marginTop = '24px'
    divTable.style.display = 'flex'
    divTable.style.flexDirection = 'column'
    divTable.style.width = '100%'

    // Creating table
    const table = document.createElement('table')
    table.style.width = '100%'
    table.style.borderCollapse = 'collapse'
    table.setAttribute('id', 'table')
    table.style.color = '#012020'

    // Creating table head
    const tableHead = document.createElement('thead')
    tableHead.style.background = '#39b2b2'
    tableHead.style.letterSpacing = '.2rem'
    tableHead.style.position = 'sticky'
    tableHead.style.top = '120.7px'
    // Creating table head row
    const tableTrHead = document.createElement('tr')
    // Creating table head columns
    const theadNames = ['icon', 'name', 'full name', 'powerstats', 'race', 'gender', 'height', 'weight', 'place of birth', 'alignment']
    // Adding table head columns to table head row
    theadNames.forEach((value) => {
        const th = document.createElement('th')
        th.style.cursor = 'pointer'
        th.textContent = value
        th.style.padding = '12px'
        th.style.border = '1px #cfeeee solid'
        th.style.textTransform = 'uppercase'
        tableTrHead.appendChild(th)
    })
    // Creating table body
    const tableBody = document.createElement('tbody')
    tableHead.appendChild(tableTrHead)
    table.appendChild(tableHead)
    table.appendChild(tableBody)

    // Creating buttons
    const buttonDiv = document.createElement('div')
    buttonDiv.style.display = 'flex'
    buttonDiv.style.justifyContent = 'center'
    buttonDiv.style.alignItems = 'center'
    buttonDiv.style.width = '100%'
    buttonDiv.style.margin = '12px'

    const previous = document.createElement('button')
    previous.id = 'previous'
    previous.textContent = 'Previous'
    previous.style.background = '#39b2b2'
    previous.style.color = '#012020'
    previous.style.border = 'none'
    previous.style.borderRadius = '7px'
    previous.style.padding = '12px'
    previous.style.margin = '0 12px'
    previous.style.fontWeight = 'bold'
    previous.style.cursor = 'pointer'
    buttonDiv.appendChild(previous)

    const indicator = document.createElement('span')
    indicator.style.color = '#012020'
    indicator.id = 'pageIndicator'
    indicator.style.fontWeight = 'bold'
    indicator.style.fontSize = '1.1rem'
    buttonDiv.appendChild(indicator)

    const next = document.createElement('button')
    next.id = 'next'
    next.textContent = 'Next'
    next.style.background = '#39b2b2'
    next.style.color = '#012020'
    next.style.border = 'none'
    next.style.borderRadius = '7px'
    next.style.padding = '12px'
    next.style.margin = '0 12px'
    next.style.fontWeight = 'bold'
    next.style.cursor = 'pointer'
    buttonDiv.appendChild(next)

    div.appendChild(divChild1)
    div.appendChild(divChild2)
    divTable.appendChild(table)
    container.appendChild(h1)
    container.appendChild(div)
    container.appendChild(divTable)
    container.appendChild(buttonDiv)
    document.body.appendChild(container)

    const search = document.querySelector('#search')
    const size = document.querySelector('#size')
    const dataTable = document.querySelector('#table')
    const tbody = dataTable.querySelector('tbody')

    let data = []
    let page = 1
    let pageSize = 20
    let sort = 'name'
    let order = 'asc'

    // Fetching data
    const fetchData = () => {
        fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
            // Convert response to JSON
            .then(response => response.json())
            .then(resp => {
                data = resp.map(value => ({...value,
                    powerstats: Object.values(value.powerstats).join(' - '),
                    height: value.appearance.height[0],
                    weight: value.appearance.weight[0]
                }))
                renderTable(page)
                updateButtons()
            })
            .catch(error => console.error('Error:', error))
    }

    const renderTable = (page) => {
        // Clearing tbody
        tbody.innerHTML = ''

        // Calculate pagination
        const start = (page - 1) * pageSize
        const end = start + pageSize

        const filterBy = data.slice().filter(val => val.name.toLowerCase().includes(search.value.toLowerCase()))

        const sortedData = filterBy.sort((value1, value2) => {
            if (value1[sort] < value2[sort]) return order === 'asc' ? -1 : 1
            if (value1[sort] > value2[sort]) return order === 'asc' ? 1 : -1
            return 0
        })
        // Extracting paginated data
        const paginatedData = sortedData.slice(start, end)

        let i = 0
        paginatedData.forEach(hero => {
            const trBody = document.createElement('tr')
            trBody.style.background = (i % 2 !== 0) ? '#cfeeee' : '#ffffff'
            trBody.innerHTML = `
                <td style="padding: 0 24px">
                    <img src="${hero.images.xs}" alt="${hero.name}">
                </td>
                <td style="padding: 0 24px">${hero.name}</td>
                <td style="padding: 0 24px">${hero.biography.fullName}</td>
                <td style="padding: 0 24px">${hero.powerstats}</td>
                <td style="padding: 0 24px">${hero.appearance.race}</td>
                <td style="padding: 0 24px">${hero.appearance.gender}</td>
                <td style="padding: 0 24px">${hero.height}</td>
                <td style="padding: 0 24px">${hero.weight}</td>
                <td style="padding: 0 24px">${hero.biography.placeOfBirth}</td>
                <td style="padding: 0 24px">${hero.biography.alignment}</td>
            `
            tbody.appendChild(trBody)
            i++
        })
    }

    document.getElementById('previous').addEventListener('click', () => {
        if (page > 1) {
            page--
            renderTable(page)
            updateButtons()
        }
    })

    document.getElementById('next').addEventListener('click', () => {
        if (page * pageSize < data.length) {
            page++
            renderTable(page)
            updateButtons()
        }
    })

    const handlePageSizeChange = () => {
        pageSize = parseInt(size.value, 10)
        renderTable(page)
        updateButtons()
    }

    const handleSearchInput = () => {
        renderTable(page)
        updateButtons()
    }

    const handleSort = (column) => {
        if (sort === column) {
            order = (order === 'asc') ? 'desc' : 'asc'
        } else {
            sort = column
            order = 'asc'
        }
        renderTable(page)
        updateButtons()
    }

    const updateButtons = () => {
        const prevBtn = document.getElementById('previous')
        const nextBtn = document.getElementById('next')

        prevBtn.disabled = (page === 1)
        nextBtn.disabled = (page * pageSize >= data.length)

        document.getElementById('pageIndicator').textContent = `page ${page}`
    }

    search.addEventListener('input', handleSearchInput)
    size.addEventListener('change', handlePageSizeChange)
    table.querySelectorAll('th').forEach(th => th.addEventListener('click', () => {
        handleSort(th.textContent.toLowerCase())
    }))

    fetchData()
})
