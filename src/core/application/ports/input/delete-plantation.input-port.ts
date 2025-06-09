export default interface DeletePlantationInputPort {
  execute(id: string): Promise<void>;
}
