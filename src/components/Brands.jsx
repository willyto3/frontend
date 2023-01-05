import styled from 'styled-components'

const Brands = () => {
  return (
    <Wrapper className='brand-section'>
      <div className='container'>
        <h3>Our Brands</h3>
        <div className='brand-section-slider'>
          <div className='slide'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNg3shfQpYr1INdRqOQpCGSLN2-jhtkAjgmNp9IS8Wg&s'
              alt='VSG'
            />
          </div>
          <div className='slide'>
            <img
              src='https://partner.microsoft.com/-/media/mssc/mpn/partner/solutions/images/featured_content_500x280_office_tile.ashx?h=280&iar=0&w=500&la=es&hash=F118796DE7DD351B0BEF393FDE4B945E'
              alt='Office'
            />
          </div>
          <div className='slide'>
            <img
              src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8aed615f-1f06-4cb6-b3f4-c62aadb6817e/dewekal-c3a511ae-c45e-4809-9a19-0a50f41a6212.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhhZWQ2MTVmLTFmMDYtNGNiNi1iM2Y0LWM2MmFhZGI2ODE3ZVwvZGV3ZWthbC1jM2E1MTFhZS1jNDVlLTQ4MDktOWExOS0wYTUwZjQxYTYyMTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IY4KRuGda1wtq4h8BUueEi5bmCFe8DGtmhnlYF_A_Ao'
              alt='Windows 11'
            />
          </div>
          <div className='slide'>
            <img
              src='https://i.blogs.es/92a09e/windows-10/450_1000.webp'
              alt='Windows 10'
            />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Brands

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }

  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 15rem;
    height: 20rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
    }
    img {
      height: 15rem;
    }
  }
`
