"use client";

import { motion } from "framer-motion";
import Container from "../ui/container";
import { Separator } from "../ui/separator";
import useIsClient from "@/app/_hooks/useIsClient";

const Footer = () => {
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <footer className="py-8 bg-muted/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Sobre Nós</h4>
              <p className="text-sm text-muted-foreground">
                Especialistas em tráfego pago e marketing digital, ajudando
                empresas a crescerem.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Links Úteis</h4>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Casos de Sucesso
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Contato</h4>
              <p className="text-sm text-muted-foreground">
                suporte@adsturbo.com.br
              </p>
            </div>
          </div>
          <Separator />
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Ads Turbo. Todos os direitos reservados.</p>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;
