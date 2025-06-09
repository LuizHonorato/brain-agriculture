export default interface DeleteFarmInputPort {
  execute(id: string): Promise<void>;
}
