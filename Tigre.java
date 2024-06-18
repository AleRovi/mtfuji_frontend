import javax.xml.datatype.DatatypeConfigurationException;

public class Tigre extends Colloquio{
    public Tigre(){
        super();
    }

    @Override
    public Animale verso(){
        return Tigre;
    }
    CREATE table Animale (Id int, Nome varChar, Verso varChar)
    
}
