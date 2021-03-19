import Button from "../Button"
import Icon from "../Icon/index"
import { StyledHeader } from "./styles"

export default function HeaderBox() {
  return (
    <StyledHeader>
      <Icon />
      <section className="buttons">
        <div className="buttons-buy">
          <Button>
            Comprar Carros
          </Button>
          <Button>
            Comprar Motos
          </Button>
        </div>
        <div className="button-sell">
          <Button>
            Vender meu carro
          </Button>
        </div>
      </section>
    </StyledHeader>
  )
}