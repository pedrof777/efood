class Food {
  description: string
  image: string
  name: string
  category: string
  infos?: string
  avaliation: string
  id: number

  constructor(
    avaliation: string,
    description: string,
    image: string,
    name: string,
    category: string,
    infos: string,
    id: number
  ) {
    this.avaliation = avaliation
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.name = name
    this.infos = infos
  }
}

export default Food
