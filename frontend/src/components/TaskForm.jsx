export const TaskForm = () => {
    return (
      <>
        <h3>Task Form</h3>
        <p>
            {/* <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username">
                </input>
                <label for="pwd">Password:</label>
                <input type="password" id="pwd" name="pwd">
                </input>
                <input type="submit" value="submit">
                </input>
                <input type="reset" value="reset">
                </input>
            </form> */}
            <form>
                <label for="tname">Task name:(required) </label>
                <input type="text" id="tname" name="tname>" required>            
                </input>
                <br/>
                <label for="des">Description:(required) </label>
                <input type="text" id="des" name="desc" required>
                </input>
                <br/>
                <label for="ddate">Due date:(required) </label>
                <input type="date" id="ddate" name="ddate" required>
                </input>
                <br/>
                <input type="submit" value="Submit">
                </input>
                <input type="reset" value="Reset">
                </input>
            </form>
        </p>
      </>
    );
  };