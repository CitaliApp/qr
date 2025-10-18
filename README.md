# Citali App Landing Page

Una página de aterrizaje simple y elegante para promocionar la descarga de la aplicación móvil Citali.

## 📱 Descripción

Esta página web está diseñada para dirigir a los usuarios a descargar la aplicación Citali desde las tiendas oficiales de aplicaciones. Incluye enlaces directos tanto para iOS (App Store) como para Android (Google Play Store).

## 🚀 Características

- **Diseño Responsivo**: Se adapta perfectamente a dispositivos móviles, tablets y escritorio
- **Detección de Dispositivo**: Resalta automáticamente el botón de descarga apropiado según el dispositivo del usuario
- **Animaciones Suaves**: Incluye transiciones y efectos visuales modernos
- **Enlaces Oficiales**: Enlaces directos a las tiendas oficiales de aplicaciones
- **SEO Optimizado**: Estructura HTML semántica para mejor indexación

## 📁 Estructura de Archivos

```
├── index.html          # Página principal
├── index.css           # Estilos y diseño
├── index.js            # Funcionalidad interactiva
└── README.md           # Documentación del proyecto
```

## 🔗 Enlaces de Descarga

- **iOS**: [App Store](https://apps.apple.com/es/app/citali/id6751284021?l=es-ES)
- **Android**: [Google Play](https://play.google.com/store/apps/details?id=com.mj.citali)

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con gradientes y efectos
- **JavaScript ES6+**: Funcionalidad interactiva y detección de dispositivos
- **Responsive Design**: Compatible con todos los tamaños de pantalla

## 📦 Instalación y Uso

1. **Clona o descarga** los archivos del proyecto
2. **Abre** `index.html` en tu navegador web
3. **Personaliza** el contenido según tus necesidades

### Para desarrollo local:

```bash
# Opción 1: Servidor HTTP simple con Python
python -m http.server 8000

# Opción 2: Servidor HTTP simple con Node.js
npx http-server

# Luego visita: http://localhost:8000
```

## 🎨 Personalización

### Cambiar la imagen de la aplicación:
Reemplaza la URL del placeholder en `index.html`:
```html
<img src="TU_IMAGEN_AQUI" alt="Citali App Icon" class="app-image">
```

### Modificar colores:
Edita las variables de color en `index.css`:
```css
/* Gradiente principal */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Actualizar enlaces:
Modifica las URLs en `index.html`:
```html
<!-- iOS -->
<a href="TU_ENLACE_IOS" class="download-btn ios-btn">

<!-- Android -->
<a href="TU_ENLACE_ANDROID" class="download-btn android-btn">
```

## 📊 Funcionalidades JavaScript

- **Detección automática de dispositivo**: iOS/Android
- **Tracking de clics**: Registro de interacciones con botones
- **Animaciones de entrada**: Efectos visuales al cargar la página
- **Feedback visual**: Respuesta a las interacciones del usuario
- **Navegación por teclado**: Soporte para accesibilidad

## 🌐 Compatibilidad de Navegadores

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Navegadores móviles

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px  
- **Mobile**: ≤ 480px

## 🔧 Mejoras Futuras

- [ ] Integración con Google Analytics
- [ ] Soporte para PWA (Progressive Web App)
- [ ] Modo oscuro/claro
- [ ] Múltiples idiomas
- [ ] Capturas de pantalla de la aplicación
- [ ] Testimonios de usuarios
- [ ] Sección de características detalladas

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👥 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

Para preguntas o sugerencias sobre este proyecto, puedes contactar al equipo de desarrollo.

---

**¡Gracias por usar Citali!** 🎉
