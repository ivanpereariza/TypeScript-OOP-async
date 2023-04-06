enum AccessType {
  PRIVATE = 'private',
  PUBLIC = 'public'
}

interface Category {
  id: number,
  name: string,
  image: string,
  access?: AccessType,
}

export { Category, AccessType }
