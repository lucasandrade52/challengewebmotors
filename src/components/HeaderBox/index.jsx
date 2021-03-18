import Button from "../Button"
import { StyledHeader } from "./styles"

export default function HeaderBox() {
  return (
    <StyledHeader>
      <img src="/webmotors-logo-8.png" alt="logomarca" />
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