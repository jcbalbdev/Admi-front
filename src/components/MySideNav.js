import SideNav , {Toggle,NavItem,NavIcon,NavText} from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
function MySideNav( ) {
    return <SideNav 
        onSelect={selected => {
            console.log(selected);
        }}>
            <SideNav.Toggle/>
            <SideNav.Nav defaultSelected = "home">
                <NavIcon><i className='fa fa-fw fa-home' style={{fontSize:'1.5em'}}></i></NavIcon>
                <NavText>Home</NavText>
            </SideNav.Nav>

        </SideNav>
}

export default MySideNav;