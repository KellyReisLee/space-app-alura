import styled from 'styled-components'


const SidebarItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  color: ${props => props.$active === 'true' ? '#bfa2ea' : '#e9e4e4'};
  font-family: ${props => props.active ? 'GandhiSansBold' : 'GandhiSansRegular'};
  gap: 1rem;
  letter-spacing: 0.7px;
  font-size: ${props => props.active ? '20px' : '18px'};
  background-color: transparent;
  transition: all 0.1s, color 0.3s;



  /* &:hover {
    color: aliceblue;

  } */
`;

const ItemSideBar = ({ item, selectedItem, setSelectedItem }) => {

  return (
    <SidebarItem
      key={item.name}
      $active={(item.name === selectedItem)}
      onClick={() => setSelectedItem(item.name).toString()}>
      <img src={item.name === selectedItem ? item.ativo : item.inativo} alt={item.name} />
      {item.name}
    </SidebarItem>
  )
}

export default ItemSideBar