router.get('/tags/:nombre', async (req, res) => {
  const tagNombre = req.params.nombre.toLowerCase();

  try {
    const resultados = await tags.findOne({
      where: {
        nombre: { [Op.like]: `%${tagNombre}%` }
      },
      include: [
        {
          model: trailers,
          through: { attributes: [] } // excluye la tabla intermedia
        }
      ]
    });

    if (!resultados || resultados.trailers.length === 0) {
      return res.status(404).json({ message: 'No se encontraron trailers con ese tag' });
    }

    res.json(resultados.trailers);

  } catch (error) {
    console.error('Error al buscar trailers por tag:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});