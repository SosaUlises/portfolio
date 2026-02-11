import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Hero() {
  return (
    <header className="flex flex-col items-center pt-28 pb-20 md:pt-36 md:pb-24">
      <Avatar className="h-24 w-24 border-2 border-border">
        <AvatarImage src="/profile.jpg" alt="Sosa Ulises Ezequiel" />
        <AvatarFallback className="text-lg font-medium bg-muted text-muted-foreground">
          SUE
        </AvatarFallback>
      </Avatar>
      <h1 className="mt-8 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance text-center leading-tight">
        Sosa Ulises Ezequiel
      </h1>
      <p className="mt-3 text-base font-medium text-primary">
        Analista en Sistemas Informaticos | Estudiante de Ingenieria en Sistemas
      </p>
      <p className="mt-4 max-w-sm text-center text-sm leading-relaxed text-muted-foreground">
        Ricardone, Santa Fe, Argentina
      </p>
    </header>
  )
}
