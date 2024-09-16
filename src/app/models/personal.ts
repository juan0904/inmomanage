export interface Personal{ 
    CodigoPersonal: number;
    TipoDocumento: number;
    Identificacion: string;
    Nombres: string;
    Apellidos: string;
    Direccion: string;
    Barrio: string;
    Telefono1: string;
    Telefono2: string;
    MunicipioCod: number;
    Celular: string;
    FechaNacimiento: Date;
    Sexo: string;
    FechaIngreso: Date;
    TipoPersonal: number;
    Estado: number;
    FechaModificacion: Date | null;
    FechaEliminacion: Date | null;
    UsuarioModif: string;
}