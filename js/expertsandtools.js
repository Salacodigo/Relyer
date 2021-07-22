
!async function fetchTool() {

    let request = await fetch('https://server-relyer.herokuapp.com/api/tools')
    let response = await request.json()
    let tools = response.tools

    console.log('%c tools', 'color:blue;')
    console.log(tools)

    tools.forEach(tool => {
        console.log(tool)
    });


}()

!async function fetchExpert() {

    let request = await fetch('https://server-relyer.herokuapp.com/api/expertos')
    let response = await request.json()
    let experts = response.usuarios

    console.log('%c Experts', 'color:blue;')
    console.log(experts)

    experts.forEach(expert => {
        console.log(expert)
    });


}()