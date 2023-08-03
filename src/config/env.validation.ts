import { plainToInstance } from 'class-transformer';
import { IsNumber, IsString, validateSync } from 'class-validator';

class AppConfig {
  @IsNumber()
  APP_PORT: number;

  @IsString()
  DB_USER: string;

  @IsString()
  DB_PASSWORD: string;

  @IsNumber()
  DB_PORT: number;

  @IsString()
  DB_HOST: string;

  @IsString()
  DB_NAME: string;
}

export default function validate(config: Record<string, unknown>) {
    const validatedConfig = plainToInstance(
      AppConfig,
      config,
      { enableImplicitConversion: true },
    );
    const errors = validateSync(validatedConfig, { skipMissingProperties: false });
        
    if (errors.length > 0) {
      throw new Error(errors.toString());
    }
    return validatedConfig;
  }