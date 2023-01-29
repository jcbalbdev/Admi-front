import SideNav, { Toggle, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate } from 'react-router-dom';
function MySideNav() {

    const navigate = useNavigate();
    return (
        <SideNav
            onSelect={(selected) => {
                console.log(selected);
                navigate('/'+selected)
            }}
            className="mysidenav"
        >  
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className='fa fa-fw fa-home' style={{ fontSize: '1.5em' }}></i>
                    </NavIcon>
                    <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey="catalogo">
                    <NavIcon>
                        <i className='fa fa-fw fa-warehouse' style={{ fontSize: '1.5em' }}></i>
                    </NavIcon>
                    <NavText>Catalogo</NavText>
                </NavItem>
                <NavItem eventKey="configuracion">
                    <NavIcon>
                        <i className='fa fa-fw fa-gear' style={{ fontSize: '1.5em' }}></i>
                    </NavIcon>
                    <NavText>Configuraciones</NavText>
                </NavItem>
                <NavItem eventKey="analisis">
                    <NavIcon>
                        <i className='fa fa-fw fa-line-chart' style={{ fontSize: '1.5em' }}></i>
                    </NavIcon>
                    <NavText>Análisis</NavText>
                    <NavItem>
                        <NavText>Resumen Ventas</NavText>
                    </NavItem>
                    <NavItem>
                        <NavText>Resumen Clientes</NavText>
                    </NavItem>

                </NavItem>


            </SideNav.Nav>
        </SideNav>
    )
}

export default MySideNav;