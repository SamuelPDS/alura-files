export class NegociacoesView {
    template(): string{
        return `
            <table class="table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>    
                </thead>
                <tbody>
                </tbody>
            </table>
        `;
    }
}