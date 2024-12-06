import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Shield className="w-12 h-12 text-primary mr-4" />
          <h1 className="text-4xl font-bold">Política de Privacidad</h1>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Introducción</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              En Nexus TMA, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta política describe cómo
              recopilamos, usamos y protegemos su información personal cuando utiliza nuestros servicios de automatización
              e inteligencia artificial.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Recopilación de Información</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Información proporcionada voluntariamente al contactarnos</li>
              <li>Datos necesarios para la implementación de soluciones de IA</li>
              <li>Información de uso de nuestros servicios y sistemas</li>
              <li>Datos técnicos para la optimización de servicios</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Uso de la Información</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Personalización de soluciones de automatización</li>
              <li>Mejora continua de nuestros servicios</li>
              <li>Comunicación sobre actualizaciones y servicios</li>
              <li>Análisis y optimización de rendimiento</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Protección de Datos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Implementamos medidas de seguridad técnicas y organizativas para proteger su información contra acceso no
              autorizado, modificación, divulgación o destrucción no autorizada.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Sus Derechos</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Acceso a sus datos personales</li>
              <li>Rectificación de información inexacta</li>
              <li>Eliminación de datos personales</li>
              <li>Oposición al procesamiento de datos</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contacto</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Para cualquier consulta sobre nuestra política de privacidad, puede contactarnos en:
              <br />
              Email: nexustma@gmail.com
              <br />
              Teléfono: 829-772-1111
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}